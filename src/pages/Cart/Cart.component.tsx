import React from 'react'
import { Row, Col } from 'react-grid-system'
import { useNavigate } from 'react-router-dom'

import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'

import {useUser} from '../../context/User'
import { useFormats } from '../../utils/useFormats' 

import {ItemlWrapper, ContentWrapper, FlexWrapper} from './Cart.styles'
import { colors } from '../../assets/styles/variables'
import { CloseIcon } from '../../assets/icons'

const { brown } = colors

const Cart = () => {
  const {formatCurrency} = useFormats()
  const {state, dispatch} = useUser()
  const navigate = useNavigate()

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

  return (
    <Container displayBlock fullHeight>
      <Typography color={brown}>Carrinho</Typography>
      <ContentWrapper>
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
              <Button>Finalizar Compra</Button>
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
                <Button onClick={() => goBack()}>Voltar</Button>
              </FlexWrapper>
            </>
          )}
      </ContentWrapper>
    </Container>
  )
}

export default Cart