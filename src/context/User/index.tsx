import React, { useContext, createContext, useReducer } from 'react'
import reducer from './reducer'
import { UserContextInterface } from '../../models/interfaces/User'
import {ActionTypes} from './types'
import initialValues from './initialValues'

type Context = {
  state: UserContextInterface
  dispatch: React.Dispatch<ActionTypes>
};

type ContextProps = {
  children?: React.ReactNode
};

const UserContext = createContext<Context>({} as Context)

export const UserProvider = ({children}: ContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  const value = {
    state,
    dispatch,
  }

  return (
    <UserContext.Provider
      value={value}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
