import React from 'react'
import {
  DisplayControl,
  BackgroundWrapper,
  LogoutConfirm,
  ButtonsWrapper,
} from './LogoutConfirm.styles'
import { useUser } from '../../../context/User'
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'
import { useNavigation } from '../../../utils/useNavigation'

const LogoutConfirmComponent = () => {
  const { dispatch } = useUser()
  const { goToHome } = useNavigation()

  const logout = () => {
    hideMessage()
    dispatch({
      type: 'CLEAR_USER',
    })
    goToHome()
  }

  const hideMessage = () => {
    document.getElementById('displayLogoutConfirm')?.setAttribute('style', 'display:none')
  }

  return (
    <DisplayControl id="displayLogoutConfirm" style={{ display: 'none' }}>
      <LogoutConfirm>
        <Typography style={{ textAlign: 'center' }}>Tem certeza que deseja sair?</Typography>
        <ButtonsWrapper>
          <Button onClick={() => hideMessage()}>N&#195;O</Button>
          <Button onClick={() => logout()}>Sim</Button>
        </ButtonsWrapper>
      </LogoutConfirm>
      <BackgroundWrapper />
    </DisplayControl>
  )
}

export default LogoutConfirmComponent
