import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-grid-system'
import { toast } from 'react-toastify'

import * as PurchaseService from '../../services/Purchase'
import * as PaymentService from '../../services/Payment'

import PurchaseInterface from '../../models/interfaces/Purchase'

import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Button from '../../components/atoms/Button'
import QRCode from '../../components/atoms/QRCode'

import { useUser } from '../../context/User'
import { useFormats } from '../../utils/useFormats'
import { useNavigation } from '../../utils/useNavigation'

import { ItemWrapper, FlexWrapper, ColWrapper } from './MyAccount.styles'
import { colors } from '../../assets/styles/variables'
import List from '../../components/templates/ListTemplate/ListTemplate.component'
import coffeeCup from '../../assets/images/favicon.svg'
import NoData from '../../components/molecules/NoData'
const { brown } = colors

const MyAccount = () => {
  const { formatCurrency } = useFormats()
  const { state } = useUser()
  const { goToProducts, goToPurchaseHistoric } = useNavigation()

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

  const getTotalValue = (purchases: PurchaseInterface[]) => {
    return purchases.reduce((accumulator, purchase) => {
      return +accumulator + +purchase.value
    }, 0)
  }

  const payAllPurchases = () => {
    const purchaseIds = purchases.map((purchase) => purchase.id)
    const purchasesValue = getTotalValue(purchases)
    PaymentService.payPurchases(userId, purchaseIds).then(() => {
      setPayValue(purchasesValue)
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
    <List title={'Compras em Aberto'}>
      {purchases.length ? (
        <>
          <Typography as="h2" centralized>Valor atual no pix<br />{formatCurrency(payValue)}</Typography>
          <Typography as="h4" centralized>Clique para copiar o pix</Typography>
          <br />
          <FlexWrapper
            centered
          >
            <div
              onClick={() => { navigator.clipboard.writeText(viewPIX), toast.success('PIX copiado com sucesso!') }}
            >
              <QRCode
                pixkey="26442024000194"
                merchant="Facil Promotora de Vendas e Servicos Ltda"
                city="PASSO FUNDO"
                amount={payValue}
                image={coffeeCup}
                onLoad={(payload) => setViewPIX(payload)}
              />
            </div>
          </FlexWrapper>
          <br />
          <Row>
            <ColWrapper xs={6} sm={12} md={12} lg={12}>
              <Button onClick={() => payAllPurchases()}>Pagar Tudo</Button>
            </ColWrapper>
            <ColWrapper xs={6} sm={12} md={12} lg={12}>
              <Typography centralized as="h4">Total em aberto {formatCurrency(getTotalValue(purchases))}</Typography>
            </ColWrapper>
          </Row>
          {purchases.map((purchase) => (
            <ItemWrapper key={'item' + purchase.id}>
              <Paper key={'paper' + purchase.id}>
                <Row key={'row' + purchase.id}>
                  <Col xs={2.8} key={'col' + purchase.id}>
                    {printTitle('Produto')}
                    {printValue(purchase.product.description)}
                  </Col>
                  <Col xs={1.8}>
                    {printTitle('Qtd')}
                    {printValue(purchase.quantity)}
                  </Col>
                  <Col xs={4.4}>
                    {printTitle('Total')}
                    {printValue(formatCurrency(purchase.value))}
                  </Col>
                  <Col xs={3}>
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
          {/* // <>
              //   <FlexWrapper centered>
              //     <ItemWrapper>
              //       <Typography as="h3">Nenhuma compra em aberto</Typography>
              //     </ItemWrapper>
              //   </FlexWrapper>
              //   <FlexWrapper centered>
              //     <ItemWrapper>
              //       <Button onClick={() => goBack()}>Voltar</Button>
              //     </ItemWrapper>
              //   </FlexWrapper>
              // </> */}
        </>
      ) : <NoData text={'Nenhuma compra em aberto'} mainOption={{
        text: 'Historico',
        action: goToPurchaseHistoric
      }} secondaryOption={{
        text: 'Comprar',
        action: goToProducts
      }}></NoData>
      }
    </List >
  )
}

export default MyAccount
