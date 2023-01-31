import React from 'react'
import { StyledComponentPropsWithRef } from 'styled-components'
import { ButtonEnum } from '../../../models/Enums/Button'
import MainButton, { CircleButton, ContainedMainButton, OutlinedMainButton } from './Button.style'
import Button from './Button.style'

interface ButtonInterface extends StyledComponentPropsWithRef<typeof Button> {
  children?: JSX.Element | string
  buttonType?: ButtonEnum
  behavior?: 'button' | 'submit' | 'reset'
}

const ButtonComponent = ({
  children,
  buttonType,
  behavior = 'button',
  ...rest
}: ButtonInterface) => {
  switch (buttonType) {
    case ButtonEnum.MainButton:
      return (
        <MainButton type={behavior} {...rest}>
          {children}
        </MainButton>
      )
    case ButtonEnum.ContainedMainButton:
      return (
        <ContainedMainButton type={behavior} {...rest}>
          {children}
        </ContainedMainButton>
      )
    case ButtonEnum.OutlinedMainButton:
      return (
        <OutlinedMainButton type={behavior} {...rest}>
          {children}
        </OutlinedMainButton>
      )
    case ButtonEnum.CircleButton:
      return (
        <CircleButton type={behavior} {...rest}>
          {children}
        </CircleButton>
      )
    default:
      return (
        <MainButton type={behavior} {...rest}>
          {children}
        </MainButton>
      )
  }
}

export default ButtonComponent
