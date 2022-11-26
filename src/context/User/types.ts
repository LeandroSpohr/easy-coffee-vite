import CartInterface from '../../models/interfaces/Cart'
import UserInterface from '../../models/interfaces/User'

export const ADD_USER = 'ADD_USER'
export const CLEAR_USER = 'CLEAR_USER'
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const REMOVE_PRODUCT_TO_CART = 'REMOVE_PRODUCT_TO_CART'
export const CLEAR_CART = 'CLEAR_CART'

interface AddUser {
  type: typeof ADD_USER
  payload: UserInterface
}

interface ClearUser {
  type: typeof CLEAR_USER
}

interface AddProductToCart {
  type: typeof ADD_PRODUCT_TO_CART
  payload: CartInterface
}

interface RemoveProductToCart {
  type: typeof REMOVE_PRODUCT_TO_CART
  payload: string
}

interface ClearProduct {
  type: typeof CLEAR_CART
}

export type ActionTypes = AddUser | ClearUser | AddProductToCart | RemoveProductToCart | ClearProduct
