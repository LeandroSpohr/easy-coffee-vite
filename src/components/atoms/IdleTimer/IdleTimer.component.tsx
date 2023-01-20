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

export const IdleTimer = ({ leftTime, children }: IdleTimerInterface): JSX.Element => {
  const { state: userState } = useUser()
  const { dispatch: dispatchModal } = useModal()
  const { goToHome } = useNavigation()
  const { removeTimer, removeModal, removeUser } = useRemove()

  useEffect(() => {
    setListeners(), setTimer()
  })

  const setListeners = () => {
    userState.hasUser ? ((document.ontouchstart = setTimer), (document.onload = setTimer)) : null
  }

  const setTimer = () => {
    removeTimer()
    if (userState.hasUser) {
      setTimeout(() => timedOut(), leftTime)
    }
  }

  const timedOut = () => {
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

  const disconnectModal = () => (
    <>
      <Typography centralized> {userState.user?.name}, desconectado por Inatividade</Typography>
      <Button
        buttonType={ButtonEnum.SecondaryButton}
        onClick={() => {
          goToHome(), removeModal()
        }}
      >
        <h3>Voltar ao menu inicial</h3>
      </Button>
    </>
  )

  return <>{children}</>
}

export default IdleTimer
