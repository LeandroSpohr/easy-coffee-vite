import React from 'react'
import { ButtonEnum } from '../../../models/Enums/Button'
import Typography from '../../atoms/Typography'
import { ButtonsWrapper, StyledButtons, TwoOptionsModal } from './TwoOptionsModal.styles'

interface TwoOptionsModalComponentInterface {
  title?: string
  mainButton: {
    text: string
    action: () => void
  }
  secondaryButton: {
    text: string
    action: () => void
  }
}

const TwoOptionsModalComponent = ({
  title,
  mainButton,
  secondaryButton,
}: TwoOptionsModalComponentInterface) => {
  return (
    <TwoOptionsModal>
      <Typography>{title}</Typography>
      <ButtonsWrapper>
        <StyledButtons
          buttonType={ButtonEnum.SecondaryButton}
          onClick={() => secondaryButton.action()}
        >
          {secondaryButton.text}
        </StyledButtons>
        <StyledButtons
          buttonType={ButtonEnum.OutlinedSecondaryButton}
          onClick={() => mainButton.action()}
        >
          {mainButton.text}
        </StyledButtons>
      </ButtonsWrapper>
    </TwoOptionsModal>
  )
}

export default TwoOptionsModalComponent
