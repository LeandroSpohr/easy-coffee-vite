import styled from 'styled-components'
import { sizes, zIndex, colors } from '../../../assets/styles/variables'

export const LogoutConfirm = styled.div`
  position: fixed;
  padding: ${sizes.size20};
  border-radius: ${sizes.size40};
  background-color: ${colors.brown};
  size: ${sizes.size400};
  z-index: ${zIndex.fifthLayer};
  right: ${sizes.size5Percent};
  left: ${sizes.size5Percent};
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: ${sizes.size5Percent};
  button {
    background-color: ${colors.veryLightBrown};
  }
`

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
`
