import React, { ReactNode } from 'react'
import { CloseIcon } from '../../../assets/icons'
import { BackgroundWrapper, CloseWrapper, ModalWrapper } from './Modal.styles'
import { useModal } from '../../../context/Modal'

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
    <BackgroundWrapper style={{ display: display ? 'initial' : 'none' }}>
      <ModalWrapper>
        <CloseWrapper>
          <CloseIcon onClick={() => closeModal()}></CloseIcon>
        </CloseWrapper>
        {children}
      </ModalWrapper>
    </BackgroundWrapper>
  )
}

export default ModalComponent
