import React from 'react'

import AppBar, {
  InfoWrapper,
  ActionsWrapper,
  IconWrapper,
  LogoutConfButtonsWrapper,
  LogoutModal,
} from './AppBar.style'

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

import { useFormats } from '../../../utils/useFormats'
import { useNavigation } from '../../../utils/useNavigation'
import { useModal } from '../../../context/Modal'
import Button from '../../atoms/Button'

const AppBarComponent = () => {
  const { state, dispatch: userDispatch } = useUser()
  const { goBack, goToMyAccount, goToCart, goToHome, goToPurchaseHistoric } = useNavigation()
  const { getFirstName } = useFormats()
  const { dispatch: modalDispatch } = useModal()

  const logout = () => {
    modalDispatch({
      type: 'SET_MODAL',
      payload: { content: logoutModal() },
    })
  }

  const logoutModal = () => {
    return (
      <LogoutModal>
        <Typography>Deseja mesmo sair?</Typography>
        <LogoutConfButtonsWrapper>
          <Button onClick={() => closeModal()}>Nao</Button>
          <Button onClick={() => clearUser()}>Sim</Button>
        </LogoutConfButtonsWrapper>
      </LogoutModal>
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

  return (
    <>
      <AppBar>
        <InfoWrapper onClick={() => goBack()}>
          <LeftArrowIcon size={sizes.size28} />
          <Typography>Olá {getFirstName(state.user?.name)}</Typography>
        </InfoWrapper>
        <ActionsWrapper>
          <IconWrapper onClick={() => goToMyAccount()}>
            <AccountIcon size={sizes.size30} />
          </IconWrapper>
          <IconWrapper onClick={() => goToCart()}>
            <CartIcon size={sizes.size30} />
          </IconWrapper>
          <IconWrapper onClick={() => goToPurchaseHistoric()}>
            <PurchaseHistoricIcon size={sizes.size30} />
          </IconWrapper>
          <IconWrapper onClick={() => logout()}>
            <ExitIcon size={sizes.size30} />
          </IconWrapper>
        </ActionsWrapper>
      </AppBar>
    </>
  )
}
export default AppBarComponent
