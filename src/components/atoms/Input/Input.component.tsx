import React from 'react'
import { StyledComponentPropsWithRef } from 'styled-components'
import Input, { Container } from './Input.style'

export interface InputComponentInterface extends StyledComponentPropsWithRef<typeof Input> {
  type?: string
  name?: string
}

const InputComponent = ({ type, ...rest }: InputComponentInterface) => (
  <Container>
    <Input type={type} {...rest} />
  </Container>
)

export default InputComponent
