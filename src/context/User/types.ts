import UserInterface from '../../models/interfaces/User'

export const ADD_USER = 'ADD_USER'
export const CLEAR_USER = 'CLEAR_USER'

interface AddUser {
  type: typeof ADD_USER
  payload: UserInterface
}

interface ClearUser {
  type: typeof CLEAR_USER
}

export type ActionTypes = AddUser | ClearUser
