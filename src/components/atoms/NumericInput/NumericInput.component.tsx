import React from 'react'
import {StyledComponentPropsWithRef} from 'styled-components'
import NumericInput from './NumericInput.style'

interface NumericInputInterface extends StyledComponentPropsWithRef<typeof NumericInput> {
  type: string
  name?: string
}

const NumericInputComponent = ({
  type,
  ...rest
}: NumericInputInterface) => (
  <NumericInput type={type} {...rest} />
)

export default NumericInputComponent