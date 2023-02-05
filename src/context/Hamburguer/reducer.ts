import IHamburguer from '../../models/interfaces/Hamburguer'
import { ActionTypes } from './types'

export const reducer = (state: IHamburguer, action: ActionTypes): IHamburguer => {
  switch (action.type) {
    case 'SET_HAMBURGUER':
      return {
        isVisible: true,
        content: action.payload,
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
