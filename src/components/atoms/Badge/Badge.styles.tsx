import styled, { CSSProperties } from 'styled-components'

import { colors, fontSizes, sizes } from '../.././../assets/styles/variables'

const { red, white } = colors
const { fontSize11 } = fontSizes
const { size5, size8, size16 } = sizes

interface BadgeInterface {
  maxWidth?: CSSProperties['maxWidth']
  backgroundColor?: string
}

const Badge = styled.span<BadgeInterface>`
  background-color: ${({ backgroundColor }) => backgroundColor || red};
  border-radius: ${size8};
  color: ${white};
  font-size: ${fontSize11};
  display: inline-block;
  line-height: ${size16};
  max-width: ${({ maxWidth }) => maxWidth || 'auto'};
  padding: 0 ${size5};
  text-align: center;
  transition: background-color 0.25s, color 0.25s;
`

export default Badge
