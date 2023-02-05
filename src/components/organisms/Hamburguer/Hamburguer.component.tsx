import React from 'react'
import { Hamburguer } from './Hamburguer.styles'
import Background from '../../atoms/Background'

interface IHamburguerComponentProps {
  isVisible: boolean
  children: JSX.Element
}

const HamburguerComponent = ({ isVisible, children }: IHamburguerComponentProps) => {
  return (
    <Hamburguer isVisible={isVisible} >
      <Background depth={5} >
        {children}
      </Background>
    </Hamburguer>
  )

}

export default HamburguerComponent