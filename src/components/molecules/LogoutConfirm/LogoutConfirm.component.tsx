import React from 'react'
import { ButtonsWrapper, LogoutConfirm, MessageWrapper } from './LogoutConfirm.styles'
import { useUser } from '../../../context/User'
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'
import { useNavigation } from '../../../utils/useNavigation'

const LogoutConfirmComponent = () => {
  const { dispatch } = useUser()
  const { goToHome } = useNavigation()

  const logout = () => {
    clearMessage()
    dispatch({
      type: 'CLEAR_USER',
    })
    goToHome()
  }

  const clearMessage = () => {
    document.getElementById('logoutConfirm')?.setAttribute('style', 'display:none')
  }

  return (
    <>
      <MessageWrapper>
        <LogoutConfirm id="logoutConfirm">
          <Typography style={{ textAlign: 'center' }}>Tem certeza que deseja sair?</Typography>
          <ButtonsWrapper>
            <Button onClick={() => clearMessage()}>Não</Button>
            <Button onClick={() => logout()}>Sim</Button>
          </ButtonsWrapper>
        </LogoutConfirm>
      </MessageWrapper>
    </>
  )
}

export default LogoutConfirmComponent
