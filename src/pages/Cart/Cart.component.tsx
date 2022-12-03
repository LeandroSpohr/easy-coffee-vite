import React from 'react'
import { Row, Col } from 'react-grid-system'
import { useNavigate } from 'react-router-dom'

import * as PurchaseService from '../../services/Purchase'

import {PurchaseInputInterface} from '../../models/interfaces/Purchase'

import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'

import {useUser} from '../../context/User'
import { useFormats } from '../../utils/useFormats' 

import {ItemlWrapper, ContentWrapper, FlexWrapper} from './Cart.styles'
import { colors } from '../../assets/styles/variables'
import { CloseIcon } from '../../assets/icons'
import { sizes } from '../../assets/styles/variables'

const { brown } = colors
const { size150, size50, size10 } = sizes

const Cart = () => {
  const {formatCurrency} = useFormats()
  const {state, dispatch} = useUser()
  const navigate = useNavigate()

  const userId = state.user ? state.user.id : ''
  const hasItems = !!state.cart.length

  const printTitle = (value: string) => (<Typography as='h4'>
    {value}
  </Typography>)

  const printValue = (value: string | number) => (<Typography color={brown} as='h4'>
    {value}
  </Typography>)

  const removeOne = (productId: string) => {
    dispatch({
      type: 'REMOVE_PRODUCT_TO_CART',
      payload: productId,
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

    PurchaseService.savePurchases(userId, input)
      .then(() => {
        clearCart()
        navigate('/minha-conta')
      })
  }

  return (
    <Container displayBlock fullHeight>
      <Paper style={{ width: size150, height: size50, padding: size10, backgroundColor: '#6b451ee6',
        borderRadius: '1rem 1rem 0rem 0rem'}}>
        <Typography>Carrinho</Typography>
      </Paper>
      <ContentWrapper style={{margin: '0rem', borderRadius: '0rem 1rem'}}>
        {hasItems ? (
          <>
            <ItemlWrapper>
              <FlexWrapper>
                <Button onClick={() => clearCart()}>Limpar Carrinho</Button>
              </FlexWrapper>
            </ItemlWrapper>
            {state.cart.map((cartProduct) => (
              <ItemlWrapper key={'item' + cartProduct.product.id}>
                <Paper key={'paper' + cartProduct.product.id}>
                  <Row key={'row' + cartProduct.product.id}>
                    <Col key={'col' + cartProduct.product.id}>
                      {printTitle(cartProduct.product.description)}
                      {printValue(formatCurrency(cartProduct.product.value))}
                    </Col>
                    <Col>
                      {printTitle('Qtd')}
                      {printValue(cartProduct.quantity)}
                    </Col>
                    <Col>
                      {printTitle('Total')}
                      {printValue(formatCurrency(cartProduct.product.value * cartProduct.quantity))}
                    </Col>
                    <Col>
                      <FlexWrapper>
                        <Button circle onClick={() => removeOne(cartProduct.product.id)}><CloseIcon /></Button>
                      </FlexWrapper>
                    </Col>
                  </Row>
                </Paper>
              </ItemlWrapper>
            ))}
            <FlexWrapper>
              <Button onClick={() => finalize()}>Finalizar Compra</Button>
            </FlexWrapper>
          </>
        )
          : (
            <>
              <FlexWrapper centered>
                <ItemlWrapper>
                  <Typography as='h3'>
                    Seu carrinho está vazio
                  </Typography>
                </ItemlWrapper>
              </FlexWrapper>
              <FlexWrapper centered>
                <ItemlWrapper>
                  <Button onClick={() => goBack()}>Voltar</Button>
                </ItemlWrapper>
                <ItemlWrapper>
                  <Button onClick={() => navigate('/minha-conta')}>Ver Compras</Button>
                </ItemlWrapper>
              </FlexWrapper>
            </>
          )}
      </ContentWrapper>
    </Container>
  )
}

export default Cart