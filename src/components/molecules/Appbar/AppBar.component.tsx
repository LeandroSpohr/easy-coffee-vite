import React from 'react'
import { Link } from 'react-router-dom'

import AppBar, { InfoWrapper, ActionsWrapper, IconWrapper } from './AppBar.style'
import { CartIcon, ExitIcon, LeftArrowIcon, AccountIcon } from '../../../assets/icons'
import { sizes } from '../../../assets/styles/variables'

import Typography from '../../atoms/Typography'
import Badge from '../../atoms/Badge'

import { useUser } from '../../../context/User'

import { useNavigation } from '../../../utils/useNavigation'
import { useModal } from '../../../context/Modal'
import TwoOptionsModal from '../TwoOptionsModal'

const AppBarComponent = () => {
  const { state, dispatch: userDispatch } = useUser()
  const { goBack, goToHome } = useNavigation()
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
        title="Deseja mesmo sair?"
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
        <InfoWrapper>
          <span onClick={() => goBack()}>
            <LeftArrowIcon size={sizes.size28} />
          </span>
          <Typography as="h2">EasyCoffee</Typography>
        </InfoWrapper>
        <ActionsWrapper>
          <Link to="/minha-conta">
            <IconWrapper>
              <AccountIcon size={sizes.size30} />
            </IconWrapper>
          </Link>
          <Link to="/carrinho">
            <IconWrapper>
              <CartIcon size={sizes.size30} />
              <Badge className="badge">{getBadgeNumber()}</Badge>
            </IconWrapper>
          </Link>
          <IconWrapper>
            <ExitIcon size={sizes.size30} onClick={() => displayLogoutModal()} />
          </IconWrapper>
        </ActionsWrapper>
      </AppBar>
    </>
  )
}
export default AppBarComponent
