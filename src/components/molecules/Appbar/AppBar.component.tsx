import React from 'react'

import AppBar, { InfoWrapper, ActionsWrapper, IconWrapper } from './AppBar.style'

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
import { useFormats } from '../../../utils/useFormats'

const AppBarComponent = () => {
  const { state, dispatch: userDispatch } = useUser()
  const { goBack, goToMyAccount, goToCart, goToHome, goToPurchaseHistoric } = useNavigation()
  const { getFirstName } = useFormats()
  const { dispatch: modalDispatch } = useModal()

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

  return (
    <>
      <AppBar>
        <InfoWrapper onClick={() => goBack()}>
          <LeftArrowIcon size={sizes.size28} />
          <Typography as="h2">Easy Coffee</Typography>
        </InfoWrapper>
        <ActionsWrapper>
          <IconWrapper onClick={() => goToMyAccount()}>
            <AccountIcon size={sizes.size35} />
          </IconWrapper>
          <IconWrapper onClick={() => goToCart()}>
            <CartIcon size={sizes.size35} />
            <Badge className="badge">{getBadgeNumber()}</Badge>
          </IconWrapper>
          <IconWrapper onClick={() => goToPurchaseHistoric()}>
            <PurchaseHistoricIcon size={sizes.size35} />
          </IconWrapper>
          <IconWrapper onClick={() => displayLogoutModal()}>
            <ExitIcon size={sizes.size35} />
          </IconWrapper>
        </ActionsWrapper>
      </AppBar>
    </>
  )
}
export default AppBarComponent
