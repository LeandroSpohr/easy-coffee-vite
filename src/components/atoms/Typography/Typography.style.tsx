import styled from 'styled-components'

import { colors, fontSizes } from '../../../assets/styles/variables'

const { white } = colors

interface TypographyInterface {
  color?: string
}

const Typography = styled.h1<TypographyInterface>`
  color: ${white};
  color: ${({color}: TypographyInterface) => (!color ? `${white}` : color)};
  h1 {
    font-size: ${fontSizes.fontSize32};
  }

  h2 {
    font-size: ${fontSizes.fontSize24};
  }

  h3 {
    font-size: ${fontSizes.fontSize18};
  }

  h4 {
    font-size: ${fontSizes.fontSize16};
  }
`

export default Typography
