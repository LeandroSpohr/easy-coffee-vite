import React, { ReactNode } from 'react'
import Background from '../../atoms/Background/'
import { Modal, ModalWrapper } from './Modal.styles'

interface ModalComponentInterface {
  children: ReactNode
  isVisible: boolean
}

const ModalComponent = ({ children, isVisible }: ModalComponentInterface) => {
  return (
    <Modal isVisible={isVisible}>
      <Background centerItems fillScreen>
        <ModalWrapper>{children}</ModalWrapper>
      </Background>
    </Modal>
  )
}

export default ModalComponent
