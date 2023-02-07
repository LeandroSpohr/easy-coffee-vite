import React, { useEffect } from 'react'

import TwoOptionsModal from '../../molecules/TwoOptionsModal'

import { useUser } from '../../../context/User'
import { useModal } from '../../../context/Modal'
import { useNavigation } from '../../../utils/useNavigation'
import { useRemove } from '../../../utils/useRemove'

interface IdleTimerInterface {
  leftTime: number
  children: JSX.Element
}

export const IdleTimer = ({ leftTime, children }: IdleTimerInterface) => {
  const { state: userState } = useUser()
  const { dispatch: dispatchModal } = useModal()
  const { goToHome } = useNavigation()
  const { removeTimer, removeModal, removeUser } = useRemove()

  const disconnect = () => {
    removeUser()
    goToHome()
    window.location.reload()
    removeModal()
  }

  const timedOutModal = () => (
    <>
      <TwoOptionsModal
        title="Inatividade"
        description='Você será desconectado por inatividade'
        mainButton={{
          text: 'Continuar',
          action: removeModal,
        }}
        secondaryButton={{
          text: 'Sair',
          action: disconnect,
        }}
      />
      {setTimeout(() => {
        disconnect()
      }, 10000)}
    </>
  )

  const displayTimedOutModal = () => {
    dispatchModal({
      type: 'SET_MODAL',
      payload: {
        content: timedOutModal(),
      },
    })
  }

  const timeOut = () => {
    displayTimedOutModal()
  }

  const setTimer = () => {
    removeTimer()
    setTimeout(() => timeOut(), leftTime)
  }

  const setListeners = () => {
    if (
      userState.hasUser
    ) {
      document.ontouchstart = setTimer
      document.onload = setTimer
    }
  }

  const onLoad = () => userState.hasUser ? (setListeners(), setTimer()) : null

  useEffect(() => {
    onLoad()
  }, [userState.hasUser])

  return children
}

export default IdleTimer
