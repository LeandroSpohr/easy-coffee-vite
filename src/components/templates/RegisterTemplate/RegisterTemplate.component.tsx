import React from 'react'
import Container from '../../atoms/Container'

type RegisterTemplateComponentInterface = {
  children?: JSX.Element | JSX.Element[]
}

const RegisterTemplateComponent: React.FC<RegisterTemplateComponentInterface> = ({ children }) => (
  <Container>{children}</Container>
)

export default RegisterTemplateComponent
