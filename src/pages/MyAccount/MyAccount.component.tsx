import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-grid-system'
import { toast } from 'react-toastify'

import * as PurchaseService from '../../services/Purchase'
import * as PaymentService from '../../services/Payment'

import PurchaseInterface from '../../models/interfaces/Purchase'

import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Button from '../../components/atoms/Button'

import { useUser } from '../../context/User'
import { useFormats } from '../../utils/useFormats'
import { useNavigation } from '../../utils/useNavigation'
import { useRemove } from '../../utils/useRemove'

import { ItemWrapper, FlexWrapper, ColWrapper, OpenValueWrapper, PayAllWrapper } from './MyAccount.styles'
import { colors, sizes } from '../../assets/styles/variables'
import List from '../../components/templates/ListTemplate/ListTemplate.component'
import PayQR from '../../components/molecules/PayQR'
import NoData from '../../components/molecules/NoData'
import { ButtonEnum } from '../../models/Enums/Button'
import { ArrowDownIcon } from '../../assets/icons'
const { brown } = colors

const MyAccount = () => {
  const { formatCurrency } = useFormats()
  const { state, dispatch } = useUser()
  const { goToProducts, goToPurchaseHistoric } = useNavigation()
  const { removePaymentValue } = useRemove()
  const userId = state.user ? state.user.id : ''

  const [purchases, setPurchases] = useState<PurchaseInterface[]>([])

  const printTitle = (value: string) => <Typography as="h4">{value}</Typography>

  const printValue = (value: string | number) => (
    <Typography color={brown} as="h4">
      {value}
    </Typography>
  )

  const payPurchase = (purchaseId: string, value: number) => {
    const purchaseIds = [purchaseId]
    PaymentService.payPurchases(userId, purchaseIds).then(() => {
      dispatch({
        type: 'ADD_PAYMENT_VALUE',
        payload: value
      })
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
      dispatch({
        type: 'ADD_PAYMENT_VALUE',
        payload: purchasesValue
      })
      toast.success('Status das compras alterado com sucesso, prossiga com o pagamento via PIX!', {
        autoClose: 5000,
      })
      setPurchases([])
    })
  }

  const purchaseItem = (purchase: PurchaseInterface) =>
    <ItemWrapper key={'item' + purchase.id}>
      <Paper key={'paper' + purchase.id}>
        <Row key={'row' + purchase.id}>
          <Col xs={3} key={'col' + purchase.id} sm={3}>
            {printTitle('Produto')}
            {printValue(purchase.product.description)}
          </Col>
          <Col xs={2} sm={3}>
            {printTitle('Qtd')}
            {printValue(purchase.quantity)}
          </Col>
          <Col xs={2.8} sm={3}>
            {printTitle('Total')}
            {printValue(formatCurrency(purchase.value))}
          </Col>
          <Col xs={0}>
            {!state.paymentValue ?
              <Button onClick={() => { payPurchase(purchase.id, purchase.value), scrollToQR() }}>Pagar</Button>
              :
              <Button onClick={() => payPurchase(purchase.id, purchase.value)}>Pagar junto</Button>
            }
          </Col>
        </Row>
      </Paper>
    </ItemWrapper >

  useEffect(() => {
    PurchaseService.getAllOpen(userId).then(setPurchases)
  }, [])

  const scrollToQR = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <List title={'Compras'}>
      {state.paymentValue ? <><PayQR /><br /><br /></> : <></>
      }
      {
        purchases.length ?
          (
            <>
              <Row>
                <ColWrapper xs={8} >
                  <PayAllWrapper>
                    <Button>Pagar tudo</Button>
                  </PayAllWrapper>
                </ColWrapper>
                <ColWrapper xs={4}>
                  <OpenValueWrapper>
                    <Typography as="h3">Em aberto {formatCurrency(getTotalValue(purchases))}</Typography>
                  </OpenValueWrapper>
                </ColWrapper>
              </Row>
              <OpenValueWrapper>
              </OpenValueWrapper>
              {purchases.map((purchase) => purchaseItem(purchase))}
            </>
          ) : <NoData text={'Nenhuma compra em aberto'} mainOption={{
            text: 'Historico',
            action: goToPurchaseHistoric
          }} secondaryOption={{
            text: 'Comprar',
            action: goToProducts
          }} />
      }
    </List >
  )
}

export default MyAccount
