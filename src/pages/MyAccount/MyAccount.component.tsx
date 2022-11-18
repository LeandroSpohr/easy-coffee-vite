import React, {useEffect, useState} from 'react'
import { Row, Col } from 'react-grid-system'
import { useNavigate } from 'react-router-dom'

import * as PurchaseService from '../../services/Purchase'

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
  console.log(state)
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

  return (
    <Container displayBlock fullHeight>
      <Typography color={brown}>Compras em aberto</Typography>
      <ContentWrapper>
        {purchases.length ? (
          <>
            {purchases.map((purchase) => (
              <ItemlWrapper key={'item' + purchase.product.id}>
                <Paper key={'paper' + purchase.product.id}>
                  <Row key={'row' + purchase.product.id}>
                    <Col key={'col' + purchase.product.id}>
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
                        <Button>Pagar</Button>
                      </FlexWrapper>
                    </Col>
                  </Row>
                </Paper>
              </ItemlWrapper>
            ))}
            <FlexWrapper>
              <Button>Pagar Todas</Button>
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
                <Button onClick={() => goBack()}>Voltar</Button>
              </FlexWrapper>
            </>
          )}
      </ContentWrapper>
    </Container>
  )
}

export default MyAccount