import React from 'react'
import { useUser } from '../context/User'
import { useModal } from '../context/Modal'

export const useIdle = (initialTotalTime: number) => {
  const { dispatch: userDispatch } = useUser()
  const { dispatch: dispatchModal } = useModal()
  const timer = () => {
    resetTimer()
    setTimeout(() => displayDisconnectModal(), initialTotalTime)
  }

  const resetTimer = () => {
    let id = window.setTimeout(() => 0)
    while (id) {
      window.clearTimeout(id)
      id--
    }
  }

  const displayDisconnectModal = () => {
    dispatchModal({
      type: 'SET_MODAL',
      payload: {
        content: disconnectModal(),
      },
    })
  }

  const disconnectModal = () => {
    disconnectUser()
    return (
      <div>
        <h1>AAAA</h1>
      </div>
    )
  }

  const disconnectUser = () => {
    userDispatch({
      type: 'CLEAR_USER',
    })
  }

  return { timer }
}
