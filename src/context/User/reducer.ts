import { UserContextInterface } from '../../models/interfaces/User'
import {ActionTypes} from './types'

export const reducer = (state: UserContextInterface, action: ActionTypes): UserContextInterface => {
  switch (action.type) {
  case 'ADD_USER':
    return {
      hasUser: true,
      user: action.payload
    }

  case 'CLEAR_USER':
    return {
      hasUser: false,
      user: null
    }

  default:
    return state
  }
}

export default reducer