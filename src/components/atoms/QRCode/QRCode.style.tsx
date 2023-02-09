import styled, { css } from 'styled-components'

import { colors, sizes } from '../../../assets/styles/variables'

const { white } = colors
const { size10 } = sizes

interface WrapperProps {
  showQRCode: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  border: ${size10} solid ${white};

  ${({ showQRCode }) => !showQRCode && css`
    display: none;
  `}

  :active {
    transition: 200ms;
    transform: scale(0.95);
  }
`
