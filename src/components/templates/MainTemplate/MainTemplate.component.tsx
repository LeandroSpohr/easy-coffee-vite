import React from 'react'

import Container from '../../atoms/Container'
import AppBar from '../../molecules/Appbar'
import { ContentWrapper } from './MainTemplate.styles'

type MainTemplateComponentInterface = {
  children?: JSX.Element | JSX.Element[]
}

const MainTemplateComponent: React.FC<MainTemplateComponentInterface> = ({ children }) => (
  <Container>
    <AppBar />
    <ContentWrapper>
      {children}
    </ContentWrapper>
  </Container>
)

export default MainTemplateComponent
