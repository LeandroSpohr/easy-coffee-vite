import React, { useEffect } from 'react'
import { useUser } from '../../../context/User'
import { useModal } from '../../../context/Modal'
import { useNavigation } from '../../../utils/useNavigation'
import { useRemove } from '../../../utils/useRemove'
import TwoOptionsModal from '../../molecules/TwoOptionsModal'

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
  }, [userState.hasUser])

  const setListeners = () => {
    userState.hasUser ? ((document.ontouchstart = setTimer), (document.onload = setTimer)) : null
  }

  const setTimer = () => {
    removeTimer()
    setTimeout(() => timeOut(), leftTime)
  }

  const timeOut = () => {
    displayTimedOutModal()
  }

  const displayTimedOutModal = () => {
    dispatchModal({
      type: 'SET_MODAL',
      payload: {
        content: timedOutModal(),
      },
    })
  }

  const disconnect = () => {
    removeUser()
    goToHome()
    location.reload()
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
      ></TwoOptionsModal>
      {setTimeout(() => {
        disconnect()
      }, 10000)}
    </>
  )

  return <>{children}</>
}

export default IdleTimer
