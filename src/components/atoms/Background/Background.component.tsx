import React, { ReactElement } from 'react'
import { Background } from './Background.styles'

interface BackgroundComponentInterface {
  children: ReactElement
}

const BackgroundComponent = ({ children }: BackgroundComponentInterface) => (
  <Background>{children}</Background>
)

export default BackgroundComponent
