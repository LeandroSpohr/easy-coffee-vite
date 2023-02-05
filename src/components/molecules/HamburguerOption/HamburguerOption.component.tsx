import React from 'react'
import Typography from '../../atoms/Typography'
import { HamburguerOption, IconWrapper, TitleWrapper } from './HamburguerOption.styles'

interface IHamburguerOptionComponent {
  text: string
  icon: any
  action: () => void
}

const HamburguerOptionComponent = ({ text, icon, action }: IHamburguerOptionComponent) => {
  return (
    <HamburguerOption>
      <IconWrapper onClick={action}>
        {icon}
      </IconWrapper>
      <TitleWrapper>
        <Typography>{text}</Typography>
      </TitleWrapper>
    </HamburguerOption>
  )
}

export default HamburguerOptionComponent