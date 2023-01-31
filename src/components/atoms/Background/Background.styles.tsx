import styled, { css } from 'styled-components'
import { colors, zIndex } from '../../../assets/styles/variables'

interface BackgroundInterface {
  isVisible: boolean
}
export const Background = styled.div<BackgroundInterface>`
  display: none;

  ${({ isVisible }: BackgroundInterface) =>
    isVisible &&
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
