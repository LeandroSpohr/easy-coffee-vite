import React from 'react'
import Button from './Button.style'

interface ButtonInterface {
  children?: JSX.Element | string
}

const ButtonComponent = ({
  children,
}: ButtonInterface) => (
  <Button>{children}</Button>
)

export default ButtonComponent