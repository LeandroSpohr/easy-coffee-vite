import { useModal } from '../context/Modal'
import { useUser } from '../context/User'

export const useRemove = () => {
  const { dispatch: modalDispatch } = useModal()
  const { dispatch: userDispatch } = useUser()

  const removeModal = () => {
    modalDispatch({
      type: 'CLOSE_MODAL',
    })
  }

  const removeTimer = () => {
    let id = window.setTimeout(() => 0)
    while (id) {
      window.clearTimeout(id)
      id -= 1
    }
  }

  const removeUser = () => {
    userDispatch({
      type: 'CLEAR_USER',
    })
  }

  return { removeModal, removeTimer, removeUser }
}
