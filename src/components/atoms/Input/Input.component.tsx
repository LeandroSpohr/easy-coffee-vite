import React from 'react'
import {StyledComponentPropsWithRef} from 'styled-components'
import Input from './Input.style'

interface InputInterface extends StyledComponentPropsWithRef<typeof Input> {
  type: string
  name?: string
}

const InputComponent = ({
  type,
  ...rest
}: InputInterface) => (
  <Input type={type} {...rest} />
)

export default InputComponent