import ModalInterface from '../../models/interfaces/Modal'
import { ActionTypes } from './types'

export const reducer = (state: ModalInterface, action: ActionTypes): ModalInterface => {
  switch (action.type) {
    case 'SET_MODAL':
      return {
        isVisible: true,
        content: action.payload.content,
      }
    case 'CLOSE_MODAL':
      return {
        isVisible: false,
        content: null,
      }
    default: {
      return { ...state }
    }
  }
}
export default reducer
