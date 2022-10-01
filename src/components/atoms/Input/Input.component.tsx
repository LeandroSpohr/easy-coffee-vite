import React from 'react'
import Input from './Input.style'

interface InputInterface {
  type: string
  name?: string
}

const InputComponent = ({
  type,
}: InputInterface) => (
  <Input type={type} />
)

export default InputComponent