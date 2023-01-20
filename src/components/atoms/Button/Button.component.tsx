import React from 'react'
import { StyledComponentPropsWithRef } from 'styled-components'
import { ButtonEnum } from '../../../models/Enums/Button'
import MainButton, {
  CircleButton,
  OutlinedMainButton,
  OutlinedSecondaryButton,
  SecondaryButton,
} from './Button.style'
import Button from './Button.style'

interface ButtonInterface extends StyledComponentPropsWithRef<typeof Button> {
  children?: JSX.Element | string
  buttonType?: ButtonEnum
}

const ButtonComponent = ({ children, buttonType, ...rest }: ButtonInterface) => {
  switch (buttonType) {
    case ButtonEnum.MainButton:
      return <MainButton {...rest}>{children}</MainButton>
    case ButtonEnum.OutlinedMainButton:
      return <OutlinedMainButton {...rest}>{children}</OutlinedMainButton>
    case ButtonEnum.SecondaryButton:
      return <SecondaryButton {...rest}>{children}</SecondaryButton>
    case ButtonEnum.OutlinedSecondaryButton:
      return <OutlinedSecondaryButton {...rest}>{children}</OutlinedSecondaryButton>
    case ButtonEnum.CircleButton:
      return <CircleButton {...rest}>{children}</CircleButton>
    default:
      return <MainButton {...rest}>{children}</MainButton>
  }
}

export default ButtonComponent
