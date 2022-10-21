import React from 'react'
import Input from './Input.style'
import { StyledComponentPropsWithRef } from 'styled-components'

interface InputInterface extends StyledComponentPropsWithRef <typeof Input>{
  type: string
  name?: string
}

const InputComponent = ({
  type,
}: InputInterface) => (
  <Input type={type} />
)

export default InputComponent