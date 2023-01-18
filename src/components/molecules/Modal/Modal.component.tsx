import React, { ReactNode } from 'react'
import { CloseIcon } from '../../../assets/icons'
import { CloseWrapper, ModalWrapper } from './Modal.styles'
import { useModal } from '../../../context/Modal'
import Background from '../../atoms/Background/'

interface ModalComponentInterface {
  children: ReactNode
  isVisible: boolean
}

const ModalComponent = ({ children, isVisible }: ModalComponentInterface) => {
  const { dispatch } = useModal()

  const closeModal = () => {
    dispatch({
      type: 'CLOSE_MODAL',
    })
  }

  return (
    <Background isVisible={isVisible}>
      <ModalWrapper>
        <CloseWrapper>
          <CloseIcon onClick={() => closeModal()}></CloseIcon>
        </CloseWrapper>
        {children}
      </ModalWrapper>
    </Background>
  )
}

export default ModalComponent
