import React from 'react'
import { Row, Col } from 'react-grid-system'
import { useNavigate } from 'react-router-dom'

import * as PurchaseService from '../../services/Purchase'

import { PurchaseInputInterface } from '../../models/interfaces/Purchase'
import CartInterface from '../../models/interfaces/Cart'

import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import NumericInput from '../../components/atoms/NumericInput'

import { useUser } from '../../context/User'
import { useFormats } from '../../utils/useFormats'

import { ItemWrapper, ContentWrapper, FlexWrapper } from './Cart.styles'
import { colors } from '../../assets/styles/variables'
import { CloseIcon } from '../../assets/icons'

const { brown } = colors

const Cart = () => {
  const { formatCurrency } = useFormats()
  const { state, dispatch } = useUser()
  const navigate = useNavigate()

  const userId = state.user ? state.user.id : ''
  const hasItems = !!state.cart.length

  const totalValue = state.cart.reduce((accumulator, cartProduct) => {
    return +accumulator + (+cartProduct.product.value * +cartProduct.quantity)
  }, 0)

  const printTitle = (value: string) => <Typography as="h4">{value}</Typography>

  const printValue = (value: string | number) => (
    <Typography color={brown} as="h4">
      {value}
    </Typography>
  )

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

  const goBack = () => {
    navigate(-1)
  }

  const finalize = () => {
    const input: PurchaseInputInterface[] = state.cart.map((cartProduct) => ({
      productId: cartProduct.product.id,
      quantity: cartProduct.quantity,
    }))

    PurchaseService.savePurchases(userId, input).then(() => {
      clearCart()
      navigate('/minha-conta')
    })
  }

  return (
    <Container displayBlock fullHeight>
      <Typography color={brown}>Carrinho</Typography>
      <ContentWrapper>
        {hasItems ? (
          <>
            <ItemWrapper>
              <FlexWrapper>
                <Button onClick={() => clearCart()}>Limpar Carrinho</Button>
              </FlexWrapper>
            </ItemWrapper>
            {state.cart.map((cartProduct) => (
              <ItemWrapper key={'item' + cartProduct.product.id}>
                <Paper key={'paper' + cartProduct.product.id}>
                  <Row key={'row' + cartProduct.product.id}>
                    <Col key={'col' + cartProduct.product.id}>
                      {printTitle(cartProduct.product.description)}
                      {printValue(formatCurrency(cartProduct.product.value))}
                    </Col>
                    <Col>
                      {printTitle('Qtd')}
                      {<NumericInput
                        size={1}
                        min={1}
                        max={15}
                        step={1}
                        value={cartProduct.quantity}
                        onChange={(event) => changeOne(cartProduct, event.target.value)}
                      />}
                    </Col>
                    <Col>
                      {printTitle('Total')}
                      {printValue(formatCurrency(cartProduct.product.value * cartProduct.quantity))}
                    </Col>
                    <Col>
                      <FlexWrapper>
                        <Button circle onClick={() => removeOne(cartProduct.product.id)}>
                          <CloseIcon />
                        </Button>
                      </FlexWrapper>
                    </Col>
                  </Row>
                </Paper>
              </ItemWrapper>
            ))}
            <FlexWrapper>
              <ItemWrapper>
                <Typography as="h4">
                  Total: {formatCurrency(totalValue)}
                </Typography>
              </ItemWrapper>
              <Button onClick={() => finalize()}>Finalizar Compra</Button>
            </FlexWrapper>
          </>
        ) : (
          <>
            <FlexWrapper centered>
              <ItemWrapper>
                <Typography as="h3">Seu carrinho está vazio</Typography>
              </ItemWrapper>
            </FlexWrapper>
            <FlexWrapper centered>
              <ItemWrapper>
                <Button onClick={() => goBack()}>Voltar</Button>
              </ItemWrapper>
              <ItemWrapper>
                <Button onClick={() => navigate('/minha-conta')}>Ver Compras</Button>
              </ItemWrapper>
            </FlexWrapper>
          </>
        )}
      </ContentWrapper>
    </Container>
  )
}

export default Cart
