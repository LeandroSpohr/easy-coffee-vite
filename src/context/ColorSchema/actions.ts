import { ActionTypes } from './types'

export function ChangeColorSchema(): ActionTypes {
  return {
    type: 'CHANGE_COLOR_SCHEMA',
  }
}

export function clearColorSchema(): ActionTypes {
  return {
    type: 'CLEAR_COLOR_SCHEMA',
  }
}
