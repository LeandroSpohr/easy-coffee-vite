import React, { useState } from 'react'

import AppBar, { InfoWrapper, ActionsWrapper, IconWrapper } from './AppBar.style'
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
  interface IPageHandler {
    path: string,
    display: JSX.Element
  }

  const iconHandler = ({ path, display }: IPageHandler) => {
    if (path === pathname) {
      return <QueryProductIcon size={sizes.size32} onClick={() => goToProducts()} />
    }
    else return display
  }


  interface IControlledIcon {
    path: string
    children: JSX.Element
  }

  const ControlledIcon = ({ path, children }: IControlledIcon) => {

    setIsProducts(!isProducts)

    return (
      <IconWrapper>
        {isProducts ? <QueryProductIcon /> : children}
      </IconWrapper>
    )
  }

  return (
    <AppBar>
      <ControlledIcon path={'minha-conta'} >
        <AccountIcon size={sizes.size32} />
      </ControlledIcon>
      {/* {pageHandler({
        path: '/produtos', display: {
          isTrue:
            <InfoWrapper >
              <Typography as="h2">EasyCoffee</Typography>
            </InfoWrapper >,
          isFalse:
            <InfoWrapper onClick={() => goBack()}>
              < LeftArrowIcon size={sizes.size28} />
            </InfoWrapper>
        }
      })} */}

      {/* <ControlledIcon path={'/minha-conta'}>
        {<AccountIcon size={sizes.size32} onClick={() => goToMyAccount()} />}
      </ControlledIcon> */}
      {/* <ActionsWrapper>

        {iconHandler({
          path: '/minha-conta',
          display:
            <IconWrapper >
              <AccountIcon size={sizes.size32} onClick={() => goToMyAccount()} />
            </IconWrapper>
        })}
        {iconHandler({
          path: '/carrinho',
          display:
            <IconWrapper >
              <CartIcon size={sizes.size32} />
              <Badge className="badge">{getBadgeNumber()}</Badge>
            </IconWrapper>
        })}
        {iconHandler}
        <IconWrapper onClick={() => goToPurchaseHistoric()}>
          <PurchaseHistoricIcon size={sizes.size32} />
        </IconWrapper>
        <IconWrapper onClick={() => displayLogoutModal()}>
          <ExitIcon size={sizes.size32} />
        </IconWrapper>
      </ActionsWrapper> */}
    </AppBar >
  )
}
export default AppBarComponent
