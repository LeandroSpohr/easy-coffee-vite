import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-grid-system'
import { toast } from 'react-toastify'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import * as PurchaseService from '../../services/Purchase'
import * as PaymentService from '../../services/Payment'

import PurchaseInterface from '../../models/interfaces/Purchase'

import { Paper } from '../../components/atoms/Paper'
import { Typography } from '../../components/atoms/Typography'
import { Button } from '../../components/atoms/Button'
import { QRCode } from '../../components/atoms/QRCode'

import { useUser } from '../../context/User'
import { useFormats } from '../../utils/useFormats'
import { useNavigation } from '../../utils/useNavigation'

import { ItemWrapper, FlexWrapper } from './MyAccount.styles'
import { colors } from '../../assets/styles/variables'
import List from '../../components/templates/ListTemplate/ListTemplate.component'

import coffeeCup from '../../assets/images/favicon.svg'

const { brown } = colors

const MyAccount = () => {
  const { formatCurrency } = useFormats()
  const { state } = useUser()
  const { goBack } = useNavigation()

  const userId = state.user ? state.user.id : ''

  const [purchases, setPurchases] = useState<PurchaseInterface[]>([])
  const [payValue, setPayValue] = useState<number>()
  const [viewPIX, setViewPIX] = useState<string>('')

  const printTitle = (value: string) => <Typography as="h4">{value}</Typography>

  const printValue = (value: string | number) => (
    <Typography color={brown} as="h4">
      {value}
    </Typography>
  )

  const payPurchase = (purchaseId: string, value: number) => {
    const purchaseIds = [purchaseId]
    PaymentService.payPurchases(userId, purchaseIds).then(() => {
      setPayValue(value)
      toast.success('Status da compra alterado com sucesso, prossiga com o pagamento via PIX!')
      const updatedPurchases = purchases.filter((purchase) => purchase.id !== purchaseId)
      setPurchases(updatedPurchases)
    })
  }

  const getTotalValue = () => purchases.reduce((accumulator, purchase) => +accumulator + +purchase.value, 0)

  const payAllPurchases = () => {
    const purchaseIds = purchases.map((purchase) => purchase.id)
    PaymentService.payPurchases(userId, purchaseIds).then(() => {
      setPayValue(getTotalValue())
      toast.success('Status das compras alterado com sucesso, prossiga com o pagamento via PIX!', {
        autoClose: 5000,
      })
      setPurchases([])
    })
  }

  useEffect(() => {
    PurchaseService.getAllOpen(userId).then(setPurchases)
  }, [])

  return (
    <List title="Compras em Aberto">
      <FlexWrapper centered>
        <QRCode
          pixkey="26442024000194"
          merchant="Facil Promotora de Vendas e Servicos Ltda"
          city="PASSO FUNDO"
          amount={payValue}
          image={coffeeCup}
          onLoad={(payload) => setViewPIX(payload)}
        />
      </FlexWrapper>
      <FlexWrapper centered>
        <ItemWrapper>
          {/* {isMobile && ( */}
          <CopyToClipboard text={viewPIX} onCopy={() => toast.success('PIX copiado com sucesso!')}>
            <Button>Pix Copia e Cola</Button>
          </CopyToClipboard>
        </ItemWrapper>
        {/* )} */}
      </FlexWrapper>
      <FlexWrapper centered>
        <ItemWrapper>
          <Typography as="h2">{formatCurrency(payValue)}</Typography>
        </ItemWrapper>
      </FlexWrapper>
      {purchases.length ? (
        <>
          {purchases.map((purchase) => (
            <ItemWrapper key={`item${purchase.id}`}>
              <Paper key={`paper${purchase.id}`}>
                <Row key={`row${purchase.id}`}>
                  <Col key={`col${purchase.id}`}>
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
                      <Button onClick={() => payPurchase(purchase.id, purchase.value)}>
                        Pagar
                      </Button>
                    </FlexWrapper>
                  </Col>
                </Row>
              </Paper>
            </ItemWrapper>
          ))}
          <FlexWrapper>
            <ItemWrapper>
              <Typography as="h4">Total {formatCurrency(getTotalValue())}</Typography>
            </ItemWrapper>
            <Button onClick={() => payAllPurchases()}>Pagar Todas</Button>
          </FlexWrapper>
        </>
      ) : (
        <>
          <FlexWrapper centered>
            <ItemWrapper>
              <Typography as="h3">Nenhuma compra em aberto</Typography>
            </ItemWrapper>
          </FlexWrapper>
          <FlexWrapper centered>
            <ItemWrapper>
              <Button onClick={() => goBack()}>Voltar</Button>
            </ItemWrapper>
          </FlexWrapper>
        </>
      )}
    </List>
  )
}

export default MyAccount
