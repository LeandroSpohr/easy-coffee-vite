import styled from 'styled-components'

import { colors } from '../../../assets/styles/variables'

const { white } = colors

interface TypographyInterface {
  color?: string
  textAlign?: string
}

const Typography = styled.h1<TypographyInterface>`
  color: ${({color}: TypographyInterface) => (!color ? `${white}` : color)};
  text-align: ${({textAlign}: TypographyInterface) => (!textAlign ? 'left' : textAlign)};
 `

export default Typography
