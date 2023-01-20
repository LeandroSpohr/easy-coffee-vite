import CartInterface from '../../models/interfaces/Cart'
import IdleInterface from '../../models/interfaces/Idle'
import UserInterface from '../../models/interfaces/User'

export const ADD_USER = 'ADD_USER'
export const CLEAR_USER = 'CLEAR_USER'
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const REMOVE_PRODUCT_TO_CART = 'REMOVE_PRODUCT_TO_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY'
export const SET_AS_IDLE = 'SET_AS_IDLE'
export const SET_AS_NOT_IDLE = 'SET_AS_NOT_IDLE'

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

interface ChangeQuantity {
  type: typeof CHANGE_QUANTITY
  payload: CartInterface
}

interface SetAsIdle {
  type: typeof SET_AS_IDLE
  payload: boolean
}

interface SetAsNotIdle {
  type: typeof SET_AS_NOT_IDLE
  payload: IdleInterface
}

export type ActionTypes =
  | AddUser
  | ClearUser
  | AddProductToCart
  | RemoveProductToCart
  | ClearProduct
  | ChangeQuantity
  | SetAsIdle
  | SetAsNotIdle
