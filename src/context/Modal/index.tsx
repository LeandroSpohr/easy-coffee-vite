import React, { useContext, createContext, useReducer } from 'react'
import reducer from './reducer'
import { ActionTypes } from './types'
import initialValues from './initialValues'
import ModalInterface from '../../models/interfaces/Modal'
import Modal from '../../components/molecules/Modal'

type Context = {
  state: ModalInterface
  dispatch: React.Dispatch<ActionTypes>
}

type ContextProps = {
  children?: React.ReactNode
}

const ModalContext = createContext<Context>({} as Context)

export const ModalProvider = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  const value = {
    state,
    dispatch,
  }

  return (
    <ModalContext.Provider value={value}>
      <Modal display={state.display}>{children}</Modal>
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
