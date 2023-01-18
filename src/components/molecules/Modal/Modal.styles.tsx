import styled from 'styled-components'
import { colors, sizes, zIndex } from '../../../assets/styles/variables'

export const ModalWrapper = styled.div`
  flex-direction: column;
  border-radius: ${sizes.size20};
  background-color: ${colors.brown};
  padding: ${sizes.size2Percent};
  z-index: ${zIndex.fifthLayer};
`

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
`
