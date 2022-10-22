import { UserContextInterface } from '../../models/interfaces/User'
import {ActionTypes} from './types'
import initialValues from './initialValues'

export const reducer = (state: UserContextInterface, action: ActionTypes): UserContextInterface => {
  switch (action.type) {
  case 'ADD_USER':
    return {
      hasUser: true,
      user: action.payload,
      cart: []
    }

  case 'CLEAR_USER':
    return initialValues

  case 'ADD_PRODUCT_TO_CART':
    return {
      ...state,
      cart: [...state.cart, action.payload]
    }

  case 'REMOVE_PRODUCT_TO_CART':
    return {
      ...state,
      cart: state.cart.filter((item) => (item.product.id !== action.payload))
    }

  case 'CLEAR_CART':
    return {
      ...state,
      cart: []
    }

  default:
    return state
  }
}

export default reducer