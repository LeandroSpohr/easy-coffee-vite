import React, { useContext, createContext, useReducer } from 'react'
import reducer from './reducer'
import { ActionTypes } from './types'
import initialValues from './initialValues'
import ThemeContextInterface from '../../models/interfaces/Color'

type Context = {
  state: ThemeContextInterface
  dispatch: React.Dispatch<ActionTypes>
}

type ContextProps = {
  children?: React.ReactNode
}

const ThemeContext = createContext<Context>({} as Context)

export const ThemeProvider = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  const value = {
    state,
    dispatch,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useColor must be used within a ThemeProvider')
  }
  return context
}
