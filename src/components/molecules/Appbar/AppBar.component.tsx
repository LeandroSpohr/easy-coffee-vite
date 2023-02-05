import React, { useState } from 'react'

import AppBar, { InfoWrapper, ActionsWrapper, IconWrapper, ColWrapper } from './AppBar.style'
import { useLocation } from 'react-router-dom'


import {
  CartIcon,
  ExitIcon,
  LeftArrowIcon,
  AccountIcon,
  PurchaseHistoricIcon,
  MenuIcon,
} from '../../../assets/icons'

import { sizes } from '../../../assets/styles/variables'

import Typography from '../../atoms/Typography'

import { useUser } from '../../../context/User'

import { useNavigation } from '../../../utils/useNavigation'
import { useModal } from '../../../context/Modal'
import TwoOptionsModal from '../TwoOptionsModal'
import Badge from '../../atoms/Badge'
import { useHamburguer } from '../../../context/Hamburguer'
import { useRemove } from '../../../utils/useRemove'

const AppBarComponent = () => {
  const { state, dispatch: userDispatch } = useUser()
  const { dispatch: modalDispatch } = useModal()
  const { dispatch: hamburguerDispatch } = useHamburguer()
  const { pathname } = useLocation()
  const [isHamburguerVisible, setIsHamburguerVisible] = useState(false)
  const { goBack, goToMyAccount, goToCart, goToHome, goToPurchaseHistoric } = useNavigation()
  const { removeHamburguer } = useRemove()

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

  const onChangeHamburguer = () => {
    setIsHamburguerVisible(!isHamburguerVisible)
    isHamburguerVisible ? removeHamburguer() : (
      hamburguerDispatch({
        type: 'SET_HAMBURGUER',
        payload: appBarHamburguer()
      })
    )
  }

  const appBarHamburguer = () => <>
    <h1>a</h1>
  </>

  const pageHandler = () => {
    switch (pathname) {
      case '/produtos':
        return (
          <><InfoWrapper>
            <Typography as="h2">EasyCoffee</Typography>
          </InfoWrapper><ActionsWrapper>
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
            </ActionsWrapper></>
        )
      default:
        return (
          <>
            <ColWrapper xs={1}>
              <InfoWrapper onClick={() => goBack()}>
                <LeftArrowIcon size={sizes.size28} />
              </InfoWrapper>
            </ColWrapper>
            <ColWrapper >
              <MenuIcon size={sizes.size28} onClick={() => onChangeHamburguer()} />
            </ColWrapper>
          </>
        )
    }
  }

  return (
    <AppBar>
      {pageHandler()}
      {/* <ActionsWrapper>
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
      </ActionsWrapper> */}
    </AppBar>
  )
}
export default AppBarComponent
