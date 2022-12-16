import styled from 'styled-components'
import { sizes, zIndex, colors } from '../../../assets/styles/variables'

export const DisplayControl = styled.div`
  position: absolute;
`

export const BackgroundWrapper = styled.div`
  position: fixed;
  background-color: ${colors.blackOpacity};
  z-index: ${zIndex.fourthLayer};
  padding: ${sizes.size100Percent};
`

export const LogoutConfirm = styled.div`
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

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: ${sizes.size5Percent};
  button {
    background-color: ${colors.veryLightBrown};
  }
`
