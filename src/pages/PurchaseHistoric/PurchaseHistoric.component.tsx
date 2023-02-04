import React, { useEffect, useReducer, useState } from 'react'
import { Row } from 'react-grid-system'

import PaidPurchase from '../../models/interfaces/PaidPurchase'

import * as PaymentService from '../../services/Payments'

import { useFormats } from '../../utils/useFormats'

import { Typography } from '../../components/atoms/Typography'
import { Paper } from '../../components/atoms/Paper'
import { Button } from '../../components/atoms/Button'
import { NoData } from '../../components/molecules/NoData'
import { Container } from '../../components/atoms/Container'
import { useUser } from '../../context/User'

import {
  ColWrapper,
  ContentWrapper,
  DetailsHeaderWrapper,
  DetailsInfoWrapper,
  IconColWrapper,
  DetailsWrapper,
  TitleWrapper,
  ItemWrapper
} from './PurchaseHistoric.styles'

import { colors, sizes } from '../../assets/styles/variables'
import { ArrowDownIcon, ArrowUpIcon } from '../../assets/icons'
import ButtonEnum from '../../models/Enums/Button'

const PurchaseHistoricComponent = () => {
  const { formatDateDDMMYYYY, formatCurrency } = useFormats()
  const [purchases, setPurchases] = useState<PaidPurchase[]>([])
  const { state } = useUser()
  const [toggleList, setToggleList] = useState([-1])
  const [, forceUpdate] = useReducer((x) => x + 1, 0)

  const handleToggle = (i: number) => {
    const list: number[] = toggleList
    if (list.includes(i)) {
      list.splice(list.indexOf(i), list.indexOf(i))
    } else list.push(i)
    setToggleList(list)
    forceUpdate()
  }

  useEffect(() => {
    PaymentService.getAll(state.user?.id).then(setPurchases)
  }, [state.user])

  return (
    <Container displayBlock fullHeight>
      <ContentWrapper>
        {purchases.length !== 0 ? (
          <>
            <TitleWrapper>
              <Typography>Histórico de Compras</Typography>
            </TitleWrapper>
            {purchases.map((item, index) => (
              <ItemWrapper key={item.id}>
                <Paper>
                  <Row>
                    <ColWrapper lg={6} sm={6} xs={6}>
                      <Typography as="h2">Data</Typography>
                    </ColWrapper>
                    <ColWrapper md={5} sm={5} xs={3}>
                      <Typography as="h2">Total</Typography>
                    </ColWrapper>
                    <IconColWrapper lg={1} sm={1} xs={3}>
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
                  <Row key={item.id}>
                    <ColWrapper sm={6} xs={6}>
                      <Typography as="h3" color={colors.brown}>
                        {formatDateDDMMYYYY(new Date(item.createdAt))}
                      </Typography>
                    </ColWrapper>
                    <ColWrapper sm={5} xs={3}>
                      <Typography as="h3" color={colors.brown}>
                        {formatCurrency(item.totalValue)}
                      </Typography>
                    </ColWrapper>
                  </Row>
                </Paper>
                <DetailsWrapper isVisible={!!toggleList.includes(index)}>
                  <DetailsHeaderWrapper>
                    <Row>
                      <ColWrapper lg={4} md={4} sm={4} xs={4}>
                        <Typography as="h3">Produto</Typography>
                      </ColWrapper>
                      <ColWrapper lg={3} md={3} sm={3} xs={3}>
                        <Typography as="h3">Preço</Typography>
                      </ColWrapper>
                      <ColWrapper lg={2} md={2} sm={2} xs={2}>
                        <Typography as="h3">Qtd</Typography>
                      </ColWrapper>
                      <ColWrapper lg={3} md={3} sm={3} xs={3}>
                        <Typography as="h3">Valor</Typography>
                      </ColWrapper>
                    </Row>
                  </DetailsHeaderWrapper>
                  <DetailsInfoWrapper>
                    <Row>
                      <ColWrapper lg={4} md={4} sm={4} xs={4}>
                        <Typography as="h4">Cafe c/ leite</Typography>
                      </ColWrapper>
                      <ColWrapper lg={3} md={3} sm={3} xs={3}>
                        <Typography as="h4">{formatCurrency(100)}</Typography>
                      </ColWrapper>
                      <ColWrapper lg={2} md={2} sm={2} xs={2}>
                        <Typography as="h4">5</Typography>
                      </ColWrapper>
                      <ColWrapper lg={3} md={3} sm={3} xs={3}>
                        <Typography as="h4">{formatCurrency(10)}</Typography>
                      </ColWrapper>
                    </Row>
                  </DetailsInfoWrapper>
                </DetailsWrapper>
              </ItemWrapper>
            ))}
          </>
        ) : (
          <NoData text="Nenhuma compra ainda" />
        )}
      </ContentWrapper>
    </Container>
  )
}

export default PurchaseHistoricComponent
