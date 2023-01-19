import React, { useRef } from 'react'
import { StyledComponentPropsWithRef } from 'styled-components'

import NumericInput, { Container } from './NumericInput.style'

import Button from '../Button'

import { RemoveIcon, AddIcon } from '../../../assets/icons'
import { ButtonEnum } from '../../../models/Enums/Button'

interface NumericInputInterface extends StyledComponentPropsWithRef<typeof NumericInput> {
  name?: string
}

const NumericInputComponent = ({ ...rest }: NumericInputInterface) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleStepUp = () => {
    inputRef.current?.stepUp()
    inputRef.current?.dispatchEvent(new Event('change', { bubbles: true }))
  }

  const handleStepDown = () => {
    inputRef.current?.stepDown()
    inputRef.current?.dispatchEvent(new Event('change', { bubbles: true }))
  }

  return (
    <Container>
      <Button buttonType={ButtonEnum.CircleButton} onClick={() => handleStepDown()}>
        <RemoveIcon />
      </Button>
      <NumericInput ref={inputRef} type="number" {...rest} />
      <Button buttonType={ButtonEnum.CircleButton} onClick={() => handleStepUp()}>
        <AddIcon />
      </Button>
    </Container>
  )
}

export default NumericInputComponent
