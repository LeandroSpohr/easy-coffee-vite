import React, { useEffect, useState } from 'react'

import PaidPurchase from '../../models/interfaces/PaidPurchase'

import * as PaymentService from '../../services/Payments'

import { useFormats } from '../../utils/useFormats'

import Typography from '../../components/atoms/Typography'

import { useUser } from '../../context/User'
import Paper from '../../components/atoms/Paper'
import { Row } from 'react-grid-system'
import { ItemWrapper } from '../Cart/Cart.styles'
import { ColWrapper, ContentWrapper, TitleWrapper } from './PurchaseHistoric.styles'
import NoData from '../../components/molecules/NoData'
import Container from '../../components/atoms/Container'
import { colors } from '../../assets/styles/variables'

const PurchaseHistoricComponent = () => {
  const { formatDateDDMMYYYY, formatCurrency } = useFormats()
  const [purchases, setPurchases] = useState<PaidPurchase[]>([])
  const { state } = useUser()

  useEffect(() => {
    PaymentService.getAll(state.user?.id).then(setPurchases)
  }, [])

  return (
    <Container displayBlock fullHeight>
      <ContentWrapper>
        {purchases.length != 0 ? (
          <>
            <br />
            <TitleWrapper>
              <Typography>Histórico de Compras</Typography>
            </TitleWrapper>
            <Row>
              <ColWrapper>
                <Typography as="h2">Data</Typography>
              </ColWrapper>
              <ColWrapper>
                <Typography as="h2">Valor Total</Typography>
              </ColWrapper>
            </Row>
            {purchases.map((item) => (
              <ItemWrapper key={item.id}>
                <Paper>
                  <Row key={item.id}>
                    <ColWrapper>
                      <Typography as="h3" color={colors.brown}>
                        {formatDateDDMMYYYY(new Date(item.createdAt))}
                      </Typography>
                    </ColWrapper>
                    <ColWrapper>
                      <Typography as="h3" color={colors.brown}>
                        {formatCurrency(item.totalValue)}
                      </Typography>
                    </ColWrapper>
                  </Row>
                </Paper>
              </ItemWrapper>
            ))}
          </>
        ) : (
          <NoData text={'Nenhuma compra ainda'} />
        )}
      </ContentWrapper>
    </Container>
  )
}

export default PurchaseHistoricComponent
