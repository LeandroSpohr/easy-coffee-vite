import React, { useState } from 'react'

import AppBar, { InfoWrapper, IconWrapper, ActionsWrapper, ColWrapper, TitleWrapper, AppBarWrapper } from './AppBar.style'
import { useLocation } from 'react-router-dom'


import {
  CartIcon,
  ExitIcon,
  LeftArrowIcon,
  AccountIcon,
  PurchaseHistoricIcon,
  QueryProductIcon,
} from '../../../assets/icons'

import { sizes } from '../../../assets/styles/variables'

import Typography from '../../atoms/Typography'

import { useUser } from '../../../context/User'

import { useNavigation } from '../../../utils/useNavigation'
import { useModal } from '../../../context/Modal'
import TwoOptionsModal from '../TwoOptionsModal'
import Badge from '../../atoms/Badge'
import { Col, Row } from 'react-grid-system'
import { RowWrapper } from '../../../pages/RegisterProduct/RegisterProduct.styles'

const AppBarComponent = () => {
  const { state, dispatch: userDispatch } = useUser()
  const { goBack, goToMyAccount, goToCart, goToHome, goToPurchaseHistoric, goToProducts } = useNavigation()
  const { dispatch: modalDispatch } = useModal()
  const { pathname } = useLocation()
  const [isProducts, setIsProducts] = useState(false)

  const displayLogoutModal = () => {
    modalDispatch({
      type: 'SET_MODAL',
      payload: { content: logoutModal() },
    })
  }

  const logoutModal = () => {
    return (
      <TwoOptionsModal
        title={'Saída'}
        description={'Deseja mesmo sair de sua conta?'}
        mainButton={{ text: 'Sim', action: clearUser }}
        secondaryButton={{ text: 'Nao', action: closeModal }}
      ></TwoOptionsModal>
    )
  }

  const clearUser = () => {
    closeModal()
    userDispatch({
      type: 'CLEAR_USER',
    })
    goToHome()
  }

  const closeModal = () => {
    modalDispatch({
      type: 'CLOSE_MODAL',
    })
  }

  const getBadgeNumber = () => {
    if (state.cart.length) {
      return state.cart.length
    }
  }

  const goBackHandler = (path: string) => {
    if (path === pathname) {
      return (
        <IconWrapper>
          <Typography as='h2'>EasyCoffee</Typography>
        </IconWrapper>
      )
    }
    else return <>
      <IconWrapper onClick={() => goToProducts()}>
        < LeftArrowIcon onClick={goBack} size={sizes.size28} />
      </IconWrapper>
    </>
  }

  return (

    <AppBar>
      <RowWrapper>
        <ColWrapper xs={4.5}>
          <TitleWrapper>
            {goBackHandler('/produtos')}
          </TitleWrapper>
        </ColWrapper>
        <Col xs={6}>
          <Row>
            {pathname !== '/produtos' ? <ColWrapper xs={2.4} onClick={() => goToProducts()}>
              <QueryProductIcon size={sizes.size32} />
            </ColWrapper> : <ColWrapper />}
            <ColWrapper xs={2.4} onClick={() => goToCart()}>
              <CartIcon size={sizes.size32} />
              <Badge className="badge">{getBadgeNumber()}</Badge>
            </ColWrapper>
            <ColWrapper xs={2.4} onClick={() => goToMyAccount()} >
              <AccountIcon size={sizes.size32} />
            </ColWrapper>
            <ColWrapper xs={2.4} onClick={() => goToPurchaseHistoric()}>
              <PurchaseHistoricIcon size={sizes.size32} />
            </ColWrapper>
            <ColWrapper xs={2.4} onClick={() => displayLogoutModal()}>
              <ExitIcon size={sizes.size32} />
            </ColWrapper>
          </Row>
        </Col>
      </RowWrapper>
    </AppBar >
  )
}
export default AppBarComponent
