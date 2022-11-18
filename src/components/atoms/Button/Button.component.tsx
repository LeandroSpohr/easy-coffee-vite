import React from 'react'
import {StyledComponentPropsWithRef} from 'styled-components'
import Button from './Button.style'

interface ButtonInterface extends StyledComponentPropsWithRef<typeof Button> {
  children?: JSX.Element | string
  circle?: boolean 
}

const ButtonComponent = ({
  children,
  circle,
  ...rest
}: ButtonInterface) => (
  <Button circle={circle} {...rest}>
    <label>
      {children}
    </label>
  </Button>
)

export default ButtonComponent