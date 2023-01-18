import styled, { css } from 'styled-components'
import { colors, zIndex } from '../../../assets/styles/variables'

interface BackgroundInterface {
  display: number
}
export const Background = styled.div<BackgroundInterface>`
  display: none;

  ${({ display }: BackgroundInterface) =>
    display &&
    css`
      display: flex;
      position: fixed;
      background-color: ${colors.blackOpacity};
      z-index: ${zIndex.fourthLayer};
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
    `}
`
