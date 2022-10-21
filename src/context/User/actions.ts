import { ActionTypes } from './types'
import UserInterface from '../../models/interfaces/User'

export function addUser(payload: UserInterface): ActionTypes {
  return {
    type: 'ADD_USER',
    payload,
  }
}

export function clearUser(): ActionTypes {
  return {
    type: 'CLEAR_USER',
  }
}
