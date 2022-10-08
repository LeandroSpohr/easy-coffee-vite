import React, {ButtonHTMLAttributes} from 'react'
import Button from './Button.style'

interface ButtonInterface extends ButtonHTMLAttributes<typeof Button> {
  children?: JSX.Element | string
}

const ButtonComponent = ({
  children,
  ...rest
}: ButtonInterface) => (
  <Button>{children}</Button>
)

export default ButtonComponent