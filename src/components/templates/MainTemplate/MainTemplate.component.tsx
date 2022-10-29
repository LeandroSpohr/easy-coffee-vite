import React from 'react'
import Container from '../../atoms/Container'

type MainTemplateComponentInterface = {
  children?: JSX.Element | JSX.Element[]
}

const MainTemplateComponent: React.FC<MainTemplateComponentInterface> = ({ children }) => (
  <Container>{children}</Container>
)

export default MainTemplateComponent
