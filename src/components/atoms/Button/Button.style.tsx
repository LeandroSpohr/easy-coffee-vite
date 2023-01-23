import styled, { css } from 'styled-components'
import { sizes, colors, fontSizes, fontWeights } from '../../../assets/styles/variables'

const defaultConfig = styled.button`
  border: none;
  padding: ${sizes.size14} ${sizes.size20};
  min-height: ${sizes.size48};
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

export const MainButton = styled(defaultConfig)``

export const OutlinedMainButton = styled(defaultConfig)`
  color: ${colors.veryLightBrown};
  background-color: ${colors.white};
  border: ${sizes.size2} solid ${colors.veryLightBrown};
`

export const ContainedMainButton = styled(defaultConfig)`
  background-color: ${colors.veryLightBrown};
`

export const CircleButton = styled(defaultConfig)`
  min-height: auto;
  padding: ${sizes.size6};
  border-radius: 50%;
  display: flex;
  :active {
    transition: 100ms;
    transform: scale(0.8);
    border-radius: 50%;
  }
`
export default MainButton
