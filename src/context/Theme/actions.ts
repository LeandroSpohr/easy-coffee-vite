import { ActionTypes } from './types'

export function changeTheme(): ActionTypes {
  return {
    type: 'CHANGE_THEME',
  }
}

export function clearTheme(): ActionTypes {
  return {
    type: 'CLEAR_THEME',
  }
}
