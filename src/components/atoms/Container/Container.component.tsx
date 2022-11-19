import React from 'react'
import Container from './Container.style'

type ContainerComponentInterface = {
  children?: JSX.Element | JSX.Element[]
  fullHeight?: boolean
  fullCentered?: boolean
  displayBlock?: boolean
};

const ContainerComponent: React.FC<
  ContainerComponentInterface
> = ({
  children,
  fullHeight,
  fullCentered,
  displayBlock
}) => (
  <Container 
    fullHeight={fullHeight}
    fullCentered={fullCentered}
    displayBlock={displayBlock}
  >
    {children}
  </Container>
)

export default ContainerComponent