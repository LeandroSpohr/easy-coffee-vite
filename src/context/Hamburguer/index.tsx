import React, { useContext, createContext, useReducer } from 'react'
import reducer from './reducer'
import { ActionTypes } from './types'
import initialValues from './initialValues'
import HamburguerInterface from '../../models/interfaces/Hamburguer'
import { Hamburguer } from '../../components/organisms/Hamburguer'

type Context = {
  state: HamburguerInterface
  dispatch: React.Dispatch<ActionTypes>
}

type ContextProps = {
  children?: React.ReactNode
}

const HamburguerContext = createContext<Context>({} as Context)

export const HamburguerProvider = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialValues)
  const value = {
    state,
    dispatch,
  }

  return (
    <HamburguerContext.Provider value={value}>
      <Hamburguer isVisible={state.isVisible}>{state.content}</Hamburguer>
      {children}
    </HamburguerContext.Provider>
  )
}

export const useHamburguer = () => {
  const context = useContext(HamburguerContext)
  if (context === undefined) {
    throw new Error('useHamburguer must be used within a HamburguerProvider')
  }
  return context
}
