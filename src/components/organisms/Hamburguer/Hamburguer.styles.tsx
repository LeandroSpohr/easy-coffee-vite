import styled, { css } from 'styled-components'

interface IHamburguerProps {
  isVisible: boolean
}

export const Hamburguer = styled.div<IHamburguerProps>`
  display: none;
  
  ${({ isVisible }: IHamburguerProps) => isVisible && css`
    display: flex;
`}
`
