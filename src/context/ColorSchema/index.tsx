import React, { useContext, createContext, useReducer } from 'react'
import reducer from './reducer'
import { ActionTypes } from './types'
import initialValues from './initialValues'
import ColorSchemaContextInterface from '../../models/interfaces/ColorSchema'

type Context = {
  state: ColorSchemaContextInterface
  dispatch: React.Dispatch<ActionTypes>
}

type ContextProps = {
  children?: React.ReactNode
}

const ColorSchemaContext = createContext<Context>({} as Context)

export const ColorSchemaProvider = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  const value = {
    state,
    dispatch,
  }

  return <ColorSchemaContext.Provider value={value}>{children}</ColorSchemaContext.Provider>
}

export const useColorSchema = () => {
  const context = useContext(ColorSchemaContext)
  if (context === undefined) {
    throw new Error('useColor must be used within a ThemeProvider')
  }
  return context
}
