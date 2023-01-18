import styled from 'styled-components'
import { colors, sizes, zIndex } from '../../../assets/styles/variables'

export const BackgroundWrapper = styled.div`
  position: fixed;
  background-color: ${colors.blackOpacity};
  z-index: ${zIndex.fourthLayer};
  padding: ${sizes.size100Percent};
`

export const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: ${sizes.size20};
  border-radius: ${sizes.size40};
  background-color: ${colors.brown};
  z-index: ${zIndex.fifthLayer};
  top: ${sizes.size30Percent};
  left: ${sizes.size5Percent};
  right: ${sizes.size5Percent};
`
export const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
`
