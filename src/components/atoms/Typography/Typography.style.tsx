import styled, { css } from 'styled-components'

import { colors } from '../../../assets/styles/variables'

const { white } = colors

interface TypographyInterface {
  color?: string
  centralized?: boolean
}

const Typography = styled.h1<TypographyInterface>`
  color: ${({ color }: TypographyInterface) => (!color ? `${white}` : color)};
  ${({ centralized }: TypographyInterface) =>
    centralized &&
    css`
      text-align: center;
    `};
`

export default Typography
