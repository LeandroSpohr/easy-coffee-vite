/* eslint-disable indent */
import { ActionTypes } from './types'
import initialValues from './initialValues'
import ThemeContextInterface from '../../models/interfaces/Color'
import { defaultTheme, colorblindTheme } from './themes'

export const reducer = (state: ThemeContextInterface, action: ActionTypes) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      if (state.colorSchema == 0) {
        state.colorSchema = 1
      } else if (state.colorSchema == 1) {
        state.colorSchema = 0
      }

      state.colorSchema == 0 ? defaultTheme() : colorblindTheme()

      return {
        colorSchema: state.colorSchema,
      }

    case 'CLEAR_THEME':
      console.log('clear theme')

      defaultTheme()
      return initialValues
    default:
      console.log('default')
      return state
  }
}

export default reducer
