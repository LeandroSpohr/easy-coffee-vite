import styled from 'styled-components'
import { sizes, colors, fontSizes, fontWeights } from '../../../assets/styles/variables'

const defaultConfig = styled.button`
  border: none;
  padding: ${sizes.size14};
  background: ${colors.brown};
  border-radius: ${sizes.size15};
  text-transform: uppercase;
  font-weight: ${fontWeights.size700};
  font-size: ${fontSizes.fontSize18};
  color: ${colors.white};

  :active {
    transition: 100ms;
    transform: scale(0.8);
  }
`

export const MainButton = styled(defaultConfig)`
  outline: ${sizes.size2} solid ${colors.white};
  outline-offset: -5px;
`

export const OutlinedMainButton = styled(defaultConfig)`
  color: ${colors.brown};
  background-color: ${colors.white};
  outline: ${sizes.size2} solid ${colors.brown};
  outline-offset: -5px;
`

export const SecondaryButton = styled(defaultConfig)`
  background: ${colors.veryLightBrown};
  outline: ${sizes.size2} solid ${colors.white};
  outline-offset: -2px;
`
export const OutlinedSecondaryButton = styled(defaultConfig)`
  color: ${colors.veryLightBrown};
  background-color: ${colors.white};
  outline: ${sizes.size2} solid ${colors.veryLightBrown};
`

export const CircleButton = styled(defaultConfig)`
  min-height: auto;
  padding: ${sizes.size6};
  border-radius: ${sizes.size50Percent};
  display: flex;
  :active {
    transition: 100ms;
    transform: scale(0.8);
  }
`
export default MainButton
