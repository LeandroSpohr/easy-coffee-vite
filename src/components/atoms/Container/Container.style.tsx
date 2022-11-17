import styled from 'styled-components'

import {sizes} from '../../../assets/styles/variables'

interface ContainerInterface {
  fullHeight?: boolean
  fullCentered?: boolean
  displayBlock?: boolean
}

const Container = styled.div`
  margin: ${sizes.size10};
  display: ${({displayBlock}: ContainerInterface) => (!displayBlock ? 'flex' : 'block')};
  height: ${({fullHeight}: ContainerInterface) => (!fullHeight ? 'auto' : '100vh')};
  justify-content: ${({fullCentered}: ContainerInterface) => (!fullCentered ? 'initial' : 'center')};
  align-items: ${({fullCentered}: ContainerInterface) => (!fullCentered ? 'initial' : 'center')};
`

export default Container
