import React, { ReactElement } from 'react'
import { Background } from './Background.styles'

interface BackgroundComponentInterface {
  display: boolean
  children: ReactElement
}

const BackgroundComponent = ({ display, children }: BackgroundComponentInterface) => (
  <Background display={+display}>{children}</Background>
)

export default BackgroundComponent
