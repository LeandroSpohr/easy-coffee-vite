import React, {useEffect, useState} from 'react'
import { Row, Col } from 'react-grid-system'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import * as PurchaseService from '../../services/Purchase'
import * as PaymentService from '../../services/Payment'

import PurchaseInterface from '../../models/interfaces/Purchase'

import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import QRCode from '../../components/atoms/QRCode'
import { sizes } from '../../assets/styles/variables'

import {useUser} from '../../context/User'
import { useFormats } from '../../utils/useFormats' 

import {ItemlWrapper, ContentWrapper, FlexWrapper} from './MyAccount.styles'
import { colors } from '../../assets/styles/variables'

const { brown } = colors
const { size310, size50, size10 } = sizes

const MyAccount = () => {
  const {formatCurrency} = useFormats()
  const navigate = useNavigate()
  const {state} = useUser()

  const userId = state.user ? state.user.id : ''
  const prefixUrl = 'https://www.google.com/search?q='

  const [purchases, setPurchases] = useState<PurchaseInterface[]>([])
  const [payValue, setPayValue] = useState<number>()

  const pixUrl = prefixUrl.concat((payValue || 0) + '')

  const printTitle = (value: string) => (<Typography as='h4'>
    {value}
  </Typography>)

  const printValue = (value: string | number) => (<Typography color={brown} as='h4'>
    {value}
  </Typography>)

  const goBack = () => {
    navigate(-1)
  }

  const payPurchase = (purchaseId: string, value: number) => {
    const purchaseIds = [purchaseId]
    PaymentService.payPurchases(userId, purchaseIds)
      .then(() => {
        setPayValue(value)
        toast.success('Status da compra alterado com sucesso, prossiga com o pagamento via PIX!')
        const updatedPurchases = purchases.filter((purchase) => purchase.id !== purchaseId)
        setPurchases(updatedPurchases)
      })
  }

  const getTotalValue = (purchases: PurchaseInterface[]) => {
    return purchases.reduce((accumulator, purchase) => {
      return +accumulator + +purchase.value
    }, 0)
  }

  const payAllPurchases = () => {
    const purchaseIds = purchases.map((purchase) => purchase.id)
    const purchasesValue = getTotalValue(purchases)
    PaymentService.payPurchases(userId, purchaseIds)
      .then(() => {
        setPayValue(purchasesValue)
        toast.success('Status das compras alterado com sucesso, prossiga com o pagamento via PIX!', {
          autoClose: 5000
        })
        setPurchases([])
      })
  }

  useEffect(() => {
    PurchaseService.getAllOpen(userId).then(setPurchases)
  }, [])

  return (
    <Container displayBlock fullHeight>
      <Paper style={{ width: size310, height: size50, padding: size10, backgroundColor: '#6b451ee6',
        borderRadius: '1rem 1rem 0rem 0rem'}}>
        <Typography>Compras em aberto</Typography>
      </Paper>
      <ContentWrapper style={{margin: '0', borderRadius: '0rem 1rem'}}>
        <FlexWrapper centered>
          <QRCode value={pixUrl} />
        </FlexWrapper>
        <FlexWrapper centered>
          <ItemlWrapper>
            <Typography as='h2'>
              {formatCurrency(payValue)}
            </Typography>
          </ItemlWrapper>
        </FlexWrapper>
        {purchases.length ? (
          <>
            {purchases.map((purchase) => (
              <ItemlWrapper key={'item' + purchase.id}>
                <Paper key={'paper' + purchase.id}>
                  <Row key={'row' + purchase.id}>
                    <Col key={'col' + purchase.id}>
                      {printTitle('Produto')}
                      {printValue(purchase.product.description)}
                    </Col>
                    <Col>
                      {printTitle('Qtd')}
                      {printValue(purchase.quantity)}
                    </Col>
                    <Col>
                      {printTitle('Total')}
                      {printValue(formatCurrency(purchase.value))}
                    </Col>
                    <Col>
                      <FlexWrapper>
                        <Button onClick={() => payPurchase(purchase.id, purchase.value)}>Pagar</Button>
                      </FlexWrapper>
                    </Col>
                  </Row>
                </Paper>
              </ItemlWrapper>
            ))}
            <FlexWrapper>
              <ItemlWrapper>
                <Typography as='h4'>
                  Total {formatCurrency(getTotalValue(purchases))}
                </Typography>
              </ItemlWrapper>
              <Button onClick={() => payAllPurchases()}>Pagar Todas</Button>
            </FlexWrapper>
          </>
        )
          : (
            <>
              <FlexWrapper centered>
                <ItemlWrapper>
                  <Typography as='h3'>
                    Nenhuma compra em aberto
                  </Typography>
                </ItemlWrapper>
              </FlexWrapper>
              <FlexWrapper centered>
                <ItemlWrapper>
                  <Button onClick={() => goBack()}>Voltar</Button>
                </ItemlWrapper>
              </FlexWrapper>
            </>
          )}
      </ContentWrapper>
    </Container>
  )
}

export default MyAccount