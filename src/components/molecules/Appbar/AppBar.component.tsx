import React from 'react'

import AppBar, { IconWrapper, ColWrapper, IconColWrapper, RowWrapper } from './AppBar.style'
import { useLocation } from 'react-router-dom'


import {
  CartIcon,
  ExitIcon,
  LeftArrowIcon,
  AccountIcon,
  PurchaseHistoricIcon,
  ProductIcon,
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
  const { goBack, goToMyAccount, goToCart, goToHome, goToPurchaseHistoric, goToProducts } = useNavigation()
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
          <RowWrapper>
            <ColWrapper xs={4}>
              <Typography as="h2">EasyCoffee</Typography>
            </ColWrapper>
            <ColWrapper xs={6}>
              <ColWrapper xs={4}>
                <IconWrapper onClick={() => goToCart()}>
                  <CartIcon size={sizes.size32} />
                  <Badge className="badge">{getBadgeNumber()}</Badge>
                </IconWrapper>
              </ColWrapper>
              <ColWrapper xs={4}>
                <IconWrapper onClick={() => goToMyAccount()}>
                  <AccountIcon size={sizes.size32} />
                </IconWrapper>
              </ColWrapper>
              <ColWrapper xs={4}>
                <IconWrapper onClick={() => goToPurchaseHistoric()}>
                  <PurchaseHistoricIcon size={sizes.size32} />
                </IconWrapper>
              </ColWrapper>
            </ColWrapper>
            <ColWrapper ended>
              <IconWrapper onClick={() => displayLogoutModal()}>
                <ExitIcon size={sizes.size32} />
              </IconWrapper>
            </ColWrapper>
          </RowWrapper>
        )
      default:
        return (
          <RowWrapper>
            <ColWrapper xs={2} sm={4}>
              <IconWrapper onClick={() => goBack()}>
                < LeftArrowIcon size={sizes.size28} />
              </IconWrapper>
            </ColWrapper>
            <ColWrapper xs={8} sm={4}>
              <IconColWrapper xs={3}>
                <IconWrapper onClick={() => goToProducts()}>
                  <ProductIcon size={sizes.size32} />
                </IconWrapper>
              </IconColWrapper>
              <IconColWrapper xs={3} >
                <IconWrapper onClick={() => goToCart()}>
                  <CartIcon size={sizes.size32} />
                  <Badge className="badge">{getBadgeNumber()}</Badge>
                </IconWrapper>
              </IconColWrapper>
              <IconColWrapper xs={3} >
                <IconWrapper onClick={() => goToMyAccount()}>
                  <AccountIcon size={sizes.size32} />
                </IconWrapper>
              </IconColWrapper>
              <IconColWrapper xs={3}>
                <IconWrapper onClick={() => goToPurchaseHistoric()}>
                  <PurchaseHistoricIcon size={sizes.size32} />
                </IconWrapper>
              </IconColWrapper>
            </ColWrapper>
            <ColWrapper xs={2} sm={4} ended>
              <IconWrapper onClick={() => displayLogoutModal()}>
                <ExitIcon size={sizes.size32} />
              </IconWrapper>
            </ColWrapper>
          </RowWrapper>
        )
    }
  }

  return (
    <AppBar>
      {pageHandler()}
    </AppBar>
  )
}
export default AppBarComponent
