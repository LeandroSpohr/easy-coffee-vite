import React, { ReactElement } from 'react'
import Background from './Background.styles'

interface BackgroundComponentInterface {
  isVisible: boolean
  children: ReactElement
}

const BackgroundComponent = ({ isVisible, children }: BackgroundComponentInterface) => (
  <Background isVisible={isVisible}>{children}</Background>
)

export default BackgroundComponent
