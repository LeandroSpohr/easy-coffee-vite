import styled from 'styled-components'

import { colors } from '../../../assets/styles/variables'

const { white } = colors

interface TypographyInterface {
  color?: string
}

const Typography = styled.h1<TypographyInterface>`
  color: ${white};
  color: ${({color}: TypographyInterface) => (!color ? `${white}` : color)};
`

export default Typography
