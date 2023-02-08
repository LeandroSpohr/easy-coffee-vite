import React, { useState } from 'react'

import AppBar, { InfoWrapper, IconWrapper, ActionsWrapper, ColWrapper, TitleWrapper } from './AppBar.style'
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
import { isMobile } from 'react-device-detect'
import Button from '../../atoms/Button'

const AppBarComponent = () => {
  const { state, dispatch: userDispatch } = useUser()
  const { goBack, goToMyAccount, goToCart, goToHome, goToPurchaseHistoric, goToProducts } = useNavigation()
  const { dispatch: modalDispatch } = useModal()
  const { pathname } = useLocation()
  const [showAppbar, setShowAppbar] = useState(true)

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
      return <Typography as='h2'>EasyCoffee</Typography>

    }
    else return < LeftArrowIcon onClick={goBack} size={sizes.size28} />

  }

  const onScroll = async () => {
    if (window.pageYOffset > window.innerHeight / 4) {
      setShowAppbar(false)

    } else {
      setShowAppbar(true)
    }
  }

  const position = () => {
    window.addEventListener('scroll', () => onScroll())
  }

  useState(() => {
    position()
  })


  return (
    <AppBar isVisible={showAppbar} >
      <Row>
        <ColWrapper xs={4} sm={1}>
          <InfoWrapper onClick={() => goToProducts()}>
            {goBackHandler('/produtos')}
          </InfoWrapper>
        </ColWrapper>
        <Col xs={4} sm={11}>
          <Button onClick={() => position()} ></Button>
          <ActionsWrapper>
            {pathname !== '/produtos' ? <ColWrapper xs={2.4} onClick={() => goToProducts()}>
              <QueryProductIcon size={sizes.size32} />
            </ColWrapper> : <ColWrapper />}
            <ColWrapper xs={2.4} sm={1} onClick={() => goToCart()}>
              <CartIcon size={sizes.size32} />
              <Badge className="badge">{getBadgeNumber()}</Badge>
            </ColWrapper>
            <ColWrapper xs={2.4} sm={1} onClick={() => goToMyAccount()} >
              <AccountIcon size={sizes.size32} />
            </ColWrapper>
            <ColWrapper xs={2.4} sm={1} onClick={() => goToPurchaseHistoric()}>
              <PurchaseHistoricIcon size={sizes.size32} />
            </ColWrapper>
            <ColWrapper xs={2.4} sm={1} onClick={() => displayLogoutModal()}>
              <ExitIcon size={sizes.size32} />
            </ColWrapper>
          </ActionsWrapper>
        </Col>
      </Row>
    </AppBar >
  )
}
export default AppBarComponent
