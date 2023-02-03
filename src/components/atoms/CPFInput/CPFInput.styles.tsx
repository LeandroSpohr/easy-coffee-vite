import styled from 'styled-components'
import InputMask from 'react-input-mask'
import { colors, fontSizes, fontWeights, sizes } from '../../../assets/styles/variables'

const CPFInput = styled(InputMask)`
  border: none;
  padding: ${sizes.size10};
  background: ${colors.brown};
  border-radius: ${sizes.size15};
  text-transform: uppercase;
  font-weight: ${fontWeights.size700};
  font-size: ${fontSizes.fontSize18};
  color: ${colors.white};
  text-align: center;
  text-transform: capitalize;

  ::placeholder {
    color: ${colors.veryLightBrown};
  }

  :active {
    transition: 200ms;
    transform: scale(0.9);
  }
`

export default CPFInput