import React from 'react'
import { Link } from 'react-router-dom'

import AppBar, {
  InfoWrapper,
  ActionsWrapper,
  IconWrapper,
  LogoutConfButtonsWrapper,
  LogoutModal,
} from './AppBar.style'
import { CartIcon, ExitIcon, LeftArrowIcon, AccountIcon } from '../../../assets/icons'
import { sizes } from '../../../assets/styles/variables'

import Typography from '../../atoms/Typography'
import Badge from '../../atoms/Badge'

import { useUser } from '../../../context/User'

import { useFormats } from '../../../utils/useFormats'
import { useNavigation } from '../../../utils/useNavigation'
import { useModal } from '../../../context/Modal'
import Button from '../../atoms/Button'

const AppBarComponent = () => {
  const { state, dispatch: userDispatch } = useUser()
  const { goBack, goToHome } = useNavigation()
  const { getFirstName } = useFormats()
  const { dispatch: modalDispatch } = useModal()

  const logout = () => {
    modalDispatch({
      type: 'SET_MODAL',
      payload: { content: logoutModal(), display: true },
    })
  }

  const logoutModal = () => {
    return (
      <LogoutModal>
        <Typography>Deseja mesmo sair?</Typography>
        <br />
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
          <Typography>Olá {getFirstName(state.user?.name)}</Typography>
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
            <ExitIcon size={sizes.size30} onClick={() => logout()} />
          </IconWrapper>
        </ActionsWrapper>
      </AppBar>
    </>
  )
}
export default AppBarComponent
