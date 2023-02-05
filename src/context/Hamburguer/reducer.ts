import HamburguerInterface from '../../models/interfaces/Hamburguer'
import { ActionTypes } from './types'

export const reducer = (state: HamburguerInterface, action: ActionTypes): HamburguerInterface => {
  switch (action.type) {
    case 'SET_HAMBURGUER':
      return {
        isVisible: true,
        content: action.payload.content,
      }
    case 'CLOSE_HAMBURGUER':
      return {
        isVisible: false,
        content: state.content,
      }
    default: {
      return { ...state }
    }
  }
}
export default reducer
