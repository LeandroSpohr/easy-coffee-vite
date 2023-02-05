import styled, { } from 'styled-components'
import { colors, zIndex } from '../../../assets/styles/variables'

export const Background = styled.div`
  display: none;
  display: flex;
  position: fixed;
  background-color: ${colors.blackOpacity};
  z-index: ${zIndex.fourthLayer};
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`
