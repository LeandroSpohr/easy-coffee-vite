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

import {useUser} from '../../context/User'
import { useFormats } from '../../utils/useFormats' 

import {ItemlWrapper, ContentWrapper, FlexWrapper} from './MyAccount.styles'
import { colors } from '../../assets/styles/variables'

const { brown } = colors

const MyAccount = () => {
  const {formatCurrency} = useFormats()
  const navigate = useNavigate()
  const {state} = useUser()

  const userId = state.user ? state.user.id : ''

  const [purchases, setPurchases] = useState<PurchaseInterface[]>([])

  const printTitle = (value: string) => (<Typography as='h4'>
    {value}
  </Typography>)

  const printValue = (value: string | number) => (<Typography color={brown} as='h4'>
    {value}
  </Typography>)

  useEffect(() => {
    PurchaseService.getAllOpen(userId).then(setPurchases)
  }, [])

  const goBack = () => {
    navigate(-1)
  }

  const payPurchase = (purchaseId: string) => {
    const purchaseIds = [purchaseId]
    PaymentService.payPurchases(userId, purchaseIds)
      .then(() => {
        toast.success('Compra paga com sucesso!')
        const updatedPurchases = purchases.filter((purchase) => purchase.id !== purchaseId)
        setPurchases(updatedPurchases)
      })
  }

  const payAllPurchases = () => {
    const purchaseIds = purchases.map((purchase) => purchase.id)
    PaymentService.payPurchases(userId, purchaseIds)
      .then(() => {
        toast.success('Compras pagas com sucesso!')
        setPurchases([])
      })
  }

  return (
    <Container displayBlock fullHeight>
      <Typography color={brown}>Compras em aberto</Typography>
      <ContentWrapper>
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
                        <Button onClick={() => payPurchase(purchase.id)}>Pagar</Button>
                      </FlexWrapper>
                    </Col>
                  </Row>
                </Paper>
              </ItemlWrapper>
            ))}
            <FlexWrapper>
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