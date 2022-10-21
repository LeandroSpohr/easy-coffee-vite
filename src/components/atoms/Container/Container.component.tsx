import React from 'react'
import Container from './Container.style'

type ContainerComponentInterface = {
  children?: JSX.Element | JSX.Element[]
  fullHeight?: boolean
  fullCentered?: boolean
};

const ContainerComponent: React.FC<
  ContainerComponentInterface
> = ({
  children,
  fullHeight,
  fullCentered
}) => (
  <Container 
    fullHeight={fullHeight}
    fullCentered={fullCentered
    }>
    {children}
  </Container>
)

export default ContainerComponent