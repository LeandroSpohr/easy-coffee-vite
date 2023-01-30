import React, { useEffect, useReducer, useState } from 'react'

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
  IconColWrapper,
  MoreDetailsWrapper,
  TitleWrapper,
} from './PurchaseHistoric.styles'
import NoData from '../../components/molecules/NoData'
import Container from '../../components/atoms/Container'
import { colors, sizes } from '../../assets/styles/variables'
import { ArrowDownIcon, ArrowUpIcon } from '../../assets/icons'
import Button from '../../components/atoms/Button'
import { ButtonEnum } from '../../models/Enums/Button'

const PurchaseHistoricComponent = () => {
  const { formatDateDDMMYYYY, formatCurrency } = useFormats()
  const [purchases, setPurchases] = useState<PaidPurchase[]>([])
  const { state } = useUser()
  const [toggleList, setToggleList] = useState([-1])
  const [, forceUpdate] = useReducer((x) => x + 1, 0)

  const handleToggle = (i: number) => {
    const list: number[] = toggleList
    list.includes(i) ? list.splice(list.indexOf(i), list.indexOf(i)) : list.push(i)
    setToggleList(list)
    forceUpdate()
  }

  useEffect(() => {
    PaymentService.getAll(state.user?.id).then(setPurchases)
  }, [])

  return (
    <Container displayBlock fullHeight>
      <ContentWrapper>
        {purchases.length != 0 ? (
          <>
            <TitleWrapper>
              <Typography>Histórico de Compras</Typography>
            </TitleWrapper>
            <Row>
              <ColWrapper sm={4} xs={6}>
                <TitleWrapper>
                  <Typography as="h2">Data</Typography>
                </TitleWrapper>
              </ColWrapper>
              <ColWrapper sm={4} xs={0}>
                <TitleWrapper>
                  <Typography as="h2">Valor</Typography>
                </TitleWrapper>
              </ColWrapper>
              <ColWrapper></ColWrapper>
            </Row>
            {purchases.map((item, index) => (
              <ItemWrapper key={item.id}>
                <Paper>
                  <Row key={item.id}>
                    <ColWrapper sm={4} xs={4}>
                      <TitleWrapper>
                        <Typography as="h3" color={colors.brown}>
                          {formatDateDDMMYYYY(new Date(item.createdAt))}
                        </Typography>
                      </TitleWrapper>
                    </ColWrapper>
                    <ColWrapper sm={4} xs={6.8}>
                      <TitleWrapper>
                        <Typography as="h3" color={colors.brown}>
                          {formatCurrency(item.totalValue)}
                        </Typography>
                      </TitleWrapper>
                    </ColWrapper>
                    <IconColWrapper sm={4} xs={1}>
                      <Button
                        buttonType={ButtonEnum.CircleButton}
                        onClick={() => handleToggle(index)}
                      >
                        {toggleList.includes(index) ? (
                          <ArrowUpIcon size={sizes.size18} />
                        ) : (
                          <ArrowDownIcon size={sizes.size18} />
                        )}
                      </Button>
                    </IconColWrapper>
                  </Row>
                  <MoreDetailsWrapper isVisible={toggleList.includes(index) ? true : false}>
                    <Row>
                      <ColWrapper xs={3}>
                        <Typography as="h3">Produto</Typography>
                      </ColWrapper>
                      <ColWrapper xs={3}>
                        <Typography as="h3">Valor Uni</Typography>
                      </ColWrapper>
                      <ColWrapper xs={3}>
                        <Typography as="h3">Quantidade</Typography>
                      </ColWrapper>
                      <ColWrapper xs={3}>
                        <Typography as="h3">Total</Typography>
                      </ColWrapper>
                    </Row>
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
