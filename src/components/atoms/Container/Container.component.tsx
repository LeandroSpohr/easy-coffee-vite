import React from 'react'
import Container from './Container.style'

type ContainerComponentInterface = {
  children?: JSX.Element
};

const ContainerComponent: React.FC<
  ContainerComponentInterface
> = ({
  children,
}) => (
  <Container>
    {children}
  </Container>
)

export default ContainerComponent