/* eslint-disable indent */
import { ActionTypes } from './types'
import initialValues from './initialValues'
import ColorSchemaContextInterface from '../../models/interfaces/ColorSchema'
import { defaultColorSchema, grayColorSchema } from './colorSchemas'

export const reducer = (state: ColorSchemaContextInterface, action: ActionTypes) => {
  state.colorSchemaEnum = Number(localStorage.getItem('colorSchemaEnum'))
  switch (action.type) {
    case 'CHANGE_COLOR_SCHEMA':
      state.colorSchemaEnum += 1
      switch (state.colorSchemaEnum) {
        case 0:
          defaultColorSchema()
          break
        case 1:
          grayColorSchema()
          break
        default:
          defaultColorSchema()
      }

      return {
        colorSchema: state.colorSchemaEnum,
      }

    case 'CLEAR_COLOR_SCHEMA':
      defaultColorSchema()
      return initialValues
    default:
      defaultColorSchema()
      return state
  }
}

export default reducer
