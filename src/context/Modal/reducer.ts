import ModalInterface from '../../models/interfaces/Modal'
import { ActionTypes } from './types'

export const reducer = (state: ModalInterface, action: ActionTypes): ModalInterface => {
  switch (action.type) {
    case 'SET_MODAL':
      return {
        display: true,
        content: action.payload.content,
      }
    case 'CLOSE_MODAL':
      return {
        display: false,
        content: null,
      }
  }
}
export default reducer
