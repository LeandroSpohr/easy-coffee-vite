import React, { useEffect, useState, useRef } from 'react'

import PaidPurchase from '../../models/interfaces/PaidPurchase'

import * as PaymentService from '../../services/Payments'

import { useFormats } from '../../utils/useFormats'

import Typography from '../../components/atoms/Typography'

import { useUser } from '../../context/User'
import Paper from '../../components/atoms/Paper'
import { Row } from 'react-grid-system'
import { ItemWrapper } from '../Cart/Cart.styles'
import {
  ColWrapper,
  ContentWrapper,
  MoreDetailsWrapper,
  TitleWrapper,
} from './PurchaseHistoric.styles'
import NoData from '../../components/molecules/NoData'
import Container from '../../components/atoms/Container'
import { colors, sizes } from '../../assets/styles/variables'
import { ArrowDownIcon, ArrowUpIcon } from '../../assets/icons'
import { IconWrapper } from '../../components/molecules/Appbar/AppBar.style'

const PurchaseHistoricComponent = () => {
  const { formatDateDDMMYYYY, formatCurrency } = useFormats()
  const [purchases, setPurchases] = useState<PaidPurchase[]>([])
  const { state } = useUser()
  const [visibility, setVisibility] = useState({
    isVisible: false,
    component: { key: '', isDisplayed: false },
  })

  useEffect(() => {
    PaymentService.getAll(state.user?.id).then(setPurchases)
  }, [])

  const verifyVisibility = (id: string): boolean => {
    return visibility.isVisible
      ? visibility.component.key == id
        ? visibility.component.isDisplayed
          ? false
          : true
        : false
      : false
  }

  return (
    <Container displayBlock fullHeight>
      <ContentWrapper>
        {purchases.length != 0 ? (
          <>
            <TitleWrapper>
              <Typography>Histórico de Compras</Typography>
            </TitleWrapper>
            <Row>
              <ColWrapper>
                <Typography as="h2">Data</Typography>
              </ColWrapper>
              <ColWrapper>
                <Typography as="h2">Valor</Typography>
              </ColWrapper>
              <ColWrapper></ColWrapper>
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
                    <ColWrapper
                      onClick={() =>
                        setVisibility({
                          isVisible: true,
                          component: {
                            key: item.id,
                            isDisplayed: !visibility.component.isDisplayed,
                          },
                        })
                      }
                    >
                      <IconWrapper>
                        {verifyVisibility(item.id) ? (
                          <ArrowUpIcon size={sizes.size30} />
                        ) : (
                          <ArrowDownIcon size={sizes.size30} />
                        )}
                      </IconWrapper>
                    </ColWrapper>
                  </Row>
                  <MoreDetailsWrapper isVisible={verifyVisibility(item.id)}>
                    <Typography as="h2">Produtos</Typography>
                  </MoreDetailsWrapper>
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
