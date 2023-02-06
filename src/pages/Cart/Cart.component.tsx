import React from 'react'
import { Row, Col } from 'react-grid-system'

import * as PurchaseService from '../../services/Purchase'

import { PurchaseInputInterface } from '../../models/interfaces/Purchase'
import CartInterface from '../../models/interfaces/Cart'

import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Button from '../../components/atoms/Button'
import NumericInput from '../../components/atoms/NumericInput'

import { useUser } from '../../context/User'
import { useFormats } from '../../utils/useFormats'
import { useNavigation } from '../../utils/useNavigation'

import { ItemWrapper, FlexWrapper, TotalWrapper, FlexEndWrapper } from './Cart.styles'
import { colors } from '../../assets/styles/variables'
import { CloseIcon } from '../../assets/icons'
import { ButtonEnum } from '../../models/Enums/Button'
import List from '../../components/templates/ListTemplate/ListTemplate.component'
import NoData from '../../components/molecules/NoData'

const { brown } = colors

const Cart = () => {
  const { formatCurrency } = useFormats()
  const { state, dispatch } = useUser()
  const { goToProducts, goToMyAccount } = useNavigation()

  const userId = state.user ? state.user.id : ''
  const hasItems = !!state.cart.length

  const totalValue = state.cart.reduce((accumulator, cartProduct) => {
    return +accumulator + +cartProduct.product.value * +cartProduct.quantity
  }, 0)


  const removeOne = (productId: string) => {
    dispatch({
      type: 'REMOVE_PRODUCT_TO_CART',
      payload: productId,
    })
  }

  const changeOne = (cartProduct: CartInterface, value: string) => {
    dispatch({
      type: 'CHANGE_QUANTITY',
      payload: {
        product: cartProduct.product,
        quantity: +value,
      },
    })
  }

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    })
  }

  const finalize = () => {
    const input: PurchaseInputInterface[] = state.cart.map((cartProduct) => ({
      productId: cartProduct.product.id,
      quantity: cartProduct.quantity,
    }))

    PurchaseService.savePurchases(userId, input).then(() => {
      clearCart()
      goToMyAccount()
    })
  }

  return (
    <List title="Carrinho de Compras">
      {hasItems ? (
        <>
          <FlexEndWrapper>
            <Typography as="h4">Total: {formatCurrency(totalValue)}</Typography>

          </FlexEndWrapper>
          <Row>
            <Col xs={6}>
              <Button onClick={() => clearCart()} >Limpar Carrinho</Button>
            </Col>
            <Col>
              <FlexEndWrapper>
                <Button onClick={() => finalize()} buttonType={ButtonEnum.OutlinedMainButton}>Finalizar Compra</Button>
              </FlexEndWrapper>
            </Col>
          </Row>
          {state.cart.map((cartProduct) => (
            <ItemWrapper key={'item' + cartProduct.product.id}>
              <Paper key={'paper' + cartProduct.product.id}>
                <Row key={'row' + cartProduct.product.id}>
                  <Col>
                    <Row>
                      <Col key={'col' + cartProduct.product.id} xs={10} sm={4}>
                        <Typography as='h2'>{cartProduct.product.description}</Typography>
                        <Typography as='h3' color={brown}>{formatCurrency(cartProduct.product.value)} und</Typography>
                        <br />
                      </Col>
                      <Col xs={6} sm={3}>
                        <Typography as='h3' >Qtd</Typography>
                        {
                          <NumericInput
                            size={1}
                            min={1}
                            step={1}
                            value={cartProduct.quantity}
                            onChange={(event) => changeOne(cartProduct, event.target.value)}
                          />
                        }
                      </Col>
                      <Col xs={6} sm={4}>
                        <FlexEndWrapper>
                          <Typography as='h3'>Total</Typography>
                          <Typography as='h2' color={brown}>{formatCurrency(cartProduct.product.value * cartProduct.quantity)}</Typography>
                        </FlexEndWrapper>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={2}>
                    <FlexWrapper>
                      <Button
                        buttonType={ButtonEnum.CircleButton}
                        onClick={() => removeOne(cartProduct.product.id)}
                      >
                        <CloseIcon />
                      </Button>
                    </FlexWrapper>
                  </Col>
                </Row>
              </Paper>
            </ItemWrapper>
          ))}
        </>
      ) : (
        <>
          <FlexWrapper centered>
          </FlexWrapper>
          <NoData text='Seu carrinho está vazio' mainOption={{
            text: 'Em aberto',
            action: goToMyAccount
          }} secondaryOption={{
            text: 'Comprar',
            action: goToProducts
          }} />
        </>
      )
      }
    </List >
  )
}

export default Cart
