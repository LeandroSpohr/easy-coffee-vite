import React, { ReactElement } from 'react'
import { Background } from './Background.styles'

interface BackgroundComponentInterface {
  children: ReactElement
  depth?: 1 | 2 | 3 | 4 | 5
  fillScreen?: boolean
  centerItems?: boolean
}

const BackgroundComponent = ({ children, depth = 4, ...rest }: BackgroundComponentInterface) => (
  <Background depth={depth} {...rest}>{children}</Background>
)

export default BackgroundComponent
