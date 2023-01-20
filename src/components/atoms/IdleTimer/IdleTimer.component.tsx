import React, { useEffect } from 'react'
import { useUser } from '../../../context/User'
import { useModal } from '../../../context/Modal'
import { useNavigation } from '../../../utils/useNavigation'
import { useRemove } from '../../../utils/useRemove'
import Button from '../Button'
import Typography from '../Typography'
import { ButtonEnum } from '../../../models/Enums/Button'

interface IdleTimerInterface {
  leftTime: number
  children: JSX.Element
}

export const IdleTimer = ({ leftTime, children }: IdleTimerInterface) => {
  const { state: userState } = useUser()
  const { dispatch: dispatchModal } = useModal()
  const { goToHome } = useNavigation()
  const { removeTimer, removeModal, removeUser } = useRemove()

  useEffect(() => {
    userState.hasUser ? (setListeners(), setTimer()) : null
  }, [userState])

  const setListeners = () => {
    userState.hasUser ? ((document.ontouchstart = setTimer), (document.onload = setTimer)) : null
  }

  const setTimer = () => {
    removeTimer()
    setTimeout(() => timeOut(), leftTime)
  }

  const timeOut = () => {
    removeUser()
    displayTimedOutModal()
  }

  const displayTimedOutModal = () => {
    dispatchModal({
      type: 'SET_MODAL',
      payload: {
        content: disconnectModal(),
      },
    })
  }

  const logoffIdleUser = () => {
    removeModal()
    goToHome()
    location.reload()
  }

  const disconnectModal = () => (
    <>
      <Typography centralized>{userState.user?.name}, desconectado por inatividade</Typography>
      <Button buttonType={ButtonEnum.SecondaryButton} onClick={() => logoffIdleUser()}>
        Voltar ao menu inicial
      </Button>
      {setTimeout(() => {
        logoffIdleUser()
      }, 5000)}
    </>
  )

  return <>{children}</>
}

export default IdleTimer
