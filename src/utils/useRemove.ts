import { useHamburguer } from '../context/Hamburguer'
import { useModal } from '../context/Modal'
import { useUser } from '../context/User'

export const useRemove = () => {
  const { dispatch: modalDispatch } = useModal()
  const { dispatch: userDispatch } = useUser()
  const { dispatch: hamburguerModal } = useHamburguer()

  const removeModal = () => {
    modalDispatch({
      type: 'CLOSE_MODAL',
    })
  }

  const removeHamburguer = () => {
    hamburguerModal({
      type: 'CLOSE_HAMBURGUER'
    })
  }

  const removeTimer = () => {
    let id = window.setTimeout(() => 0)
    while (id) {
      window.clearTimeout(id)
      id--
    }
  }

  const removeUser = () => {
    userDispatch({
      type: 'CLEAR_USER',
    })
  }

  return { removeModal, removeHamburguer, removeTimer, removeUser }
}
