import { UserContextInterface } from '../../models/interfaces/User'
import CartInterface from '../../models/interfaces/Cart'
import { ActionTypes } from './types'
import initialValues from './initialValues'
import { UserEnum } from '../../models/Enums/User'

export const reducer = (state: UserContextInterface, action: ActionTypes): UserContextInterface => {
  const getProductCarts = (payloadCartProduct: CartInterface) => {
    const cart = state.cart
    const someProductIndex = state.cart.findIndex(
      (cartProduct) => cartProduct.product.id === payloadCartProduct.product.id,
    )
    if (someProductIndex !== -1) {
      cart[someProductIndex].quantity =
        cart[someProductIndex].quantity + payloadCartProduct.quantity
    } else {
      cart.push(payloadCartProduct)
    }
    return cart
  }

  switch (action.type) {
    case 'ADD_USER':
      return {
        hasUser: true,
        user: action.payload,
        permissionLevel: UserEnum.Client,
        cart: [],
      }

    case 'CLEAR_USER':
      return initialValues

    case 'ADD_PRODUCT_TO_CART':
      return {
        ...state,
        cart: getProductCarts({ ...action.payload }),
      }

    case 'REMOVE_PRODUCT_TO_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      }

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      }

    case 'CHANGE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.product.id === action.payload.product.id) {
            return action.payload
          }
          return item
        }),
      }

    default:
      return state
  }
}

export default reducer
