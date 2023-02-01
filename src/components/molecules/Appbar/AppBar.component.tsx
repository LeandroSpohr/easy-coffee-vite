import React from 'react'

import AppBar, { InfoWrapper, ActionsWrapper, IconWrapper } from './AppBar.style'
import { useLocation } from 'react-router-dom'


import {
  CartIcon,
  ExitIcon,
  LeftArrowIcon,
  AccountIcon,
  PurchaseHistoricIcon,
} from '../../../assets/icons'

import { sizes } from '../../../assets/styles/variables'

import Typography from '../../atoms/Typography'

import { useUser } from '../../../context/User'

import { useNavigation } from '../../../utils/useNavigation'
import { useModal } from '../../../context/Modal'
import TwoOptionsModal from '../TwoOptionsModal'
import Badge from '../../atoms/Badge'

const AppBarComponent = () => {
  const { state, dispatch: userDispatch } = useUser()
  const { goBack, goToMyAccount, goToCart, goToHome, goToPurchaseHistoric } = useNavigation()
  const { dispatch: modalDispatch } = useModal()
  const { pathname } = useLocation()

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

  const pageHandler = () => {
    switch (pathname) {
      case '/produtos':
        return (
          <InfoWrapper >
            <Typography as="h2">EasyCoffee</Typography>
          </InfoWrapper >
        )
      default:
        return (
          <InfoWrapper onClick={() => goBack()}>
            < LeftArrowIcon size={sizes.size28} />
          </InfoWrapper>
        )
    }
  }

  return (
    <AppBar>
      {pageHandler()}
      <ActionsWrapper>
        <IconWrapper onClick={() => goToMyAccount()}>
          <AccountIcon size={sizes.size32} />
        </IconWrapper>
        <IconWrapper onClick={() => goToCart()}>
          <CartIcon size={sizes.size32} />
          <Badge className="badge">{getBadgeNumber()}</Badge>
        </IconWrapper>
        <IconWrapper onClick={() => goToPurchaseHistoric()}>
          <PurchaseHistoricIcon size={sizes.size32} />
        </IconWrapper>
        <IconWrapper onClick={() => displayLogoutModal()}>
          <ExitIcon size={sizes.size32} />
        </IconWrapper>
      </ActionsWrapper>
    </AppBar>
  )
}
export default AppBarComponent
