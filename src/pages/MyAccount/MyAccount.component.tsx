import React from 'react'
import { Row, Col } from 'react-grid-system'

import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'

import {useUser} from '../../context/User'
import { useFormats } from '../../utils/useFormats' 

import {ItemlWrapper, ContentWrapper} from './MyAccount.styles'
import { colors } from '../../assets/styles/variables'

const { brown } = colors

const MyAccount = () => {
  const {formatCurrency} = useFormats()
  const {state} = useUser()

  const printTitle = (value: string) => (<Typography as='h4'>
    {value}
  </Typography>)

  const printValue = (value: string | number) => (<Typography color={brown} as='h4'>
    {value}
  </Typography>)

  return (
    <Container displayBlock fullHeight>
      <Typography color={brown}>Carrinho</Typography>
      <ContentWrapper>
        <ItemlWrapper>
          <Button>Limpar Carrinho</Button>
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
                  <Button>Pagar</Button>
                </Col>
              </Row>
            </Paper>
          </ItemlWrapper>
        ))}
        <Button>Pagar Tudo</Button>
      </ContentWrapper>
    </Container>
  )
}

export default MyAccount