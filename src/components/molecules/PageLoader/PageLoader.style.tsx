import styled from 'styled-components'

import { colors, zIndex } from '../../../assets/styles/variables'

const {lightGrayOpacity} = colors
const {fifthLayer} = zIndex

export const Container = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${lightGrayOpacity};
  z-index: ${fifthLayer};
`
