import styled from 'styled-components'
import { colors, sizes, zIndex } from '../../../assets/styles/variables'

export const ModalWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  border-radius: ${sizes.size20};
  background-color: ${colors.brown};
  z-index: ${zIndex.fifthLayer};
  margin-block: ${sizes.size30};
  margin-left: ${sizes.size5Percent};
  margin-right: ${sizes.size5Percent};
`

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
`

export default ModalWrapper