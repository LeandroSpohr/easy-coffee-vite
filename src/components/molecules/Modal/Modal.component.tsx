import React, { ReactNode } from 'react'
import { CloseIcon } from '../../../assets/icons'
import { CloseWrapper, ModalWrapper } from './Modal.styles'
import { useModal } from '../../../context/Modal'
import Background from '../../atoms/Background/'

interface ModalComponentInterface {
  children: ReactNode
  display: boolean
}

const ModalComponent = ({ children, display }: ModalComponentInterface) => {
  const { dispatch } = useModal()

  const closeModal = () => {
    dispatch({
      type: 'CLOSE_MODAL',
    })
  }

  return (
    <Background display={display}>
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
