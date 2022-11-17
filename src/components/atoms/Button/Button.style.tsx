import styled from 'styled-components'
import { sizes, colors, fontSizes, fontWeights } from '../../../assets/styles/variables'

const Button = styled.button`
  border: none;
  width: ${sizes.size150};
  height: ${sizes.size48};
  background: ${colors.brown};
  border-radius: ${sizes.size15};

  label {
    color: ${colors.white};
    text-transform: uppercase;
    font-weight: ${fontWeights.size700};
    font-size: ${fontSizes.fontSize18};
  }
`

export default Button
