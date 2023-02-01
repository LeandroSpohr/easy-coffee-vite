import React, { ReactNode } from 'react'
import Background from '../../atoms/Background/'
import { ModalWrapper } from './Modal.styles'

interface ModalComponentInterface {
  children: ReactNode
  isVisible: boolean
}

const ModalComponent = ({ children, isVisible }: ModalComponentInterface) => {
  return (
    <Background isVisible={isVisible}>
      <ModalWrapper>{children}</ModalWrapper>
    </Background>
  )
}

export default ModalComponent
