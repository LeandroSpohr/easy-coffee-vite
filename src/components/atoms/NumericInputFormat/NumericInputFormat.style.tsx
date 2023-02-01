import { NumericFormat } from 'react-number-format'
import styled from 'styled-components'

import { colors, fontSizes, sizes } from '../../../assets/styles/variables'

const { veryLightBrown, white, brown, veryLightGray } = colors

const { fontSize18 } = fontSizes

const { size8, size12, size20, size100Percent } = sizes

export const Container = styled.div`
  input[type='number'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`

export const NumericInput = styled(NumericFormat)`
  border: none;
  background: ${brown};
  width: ${size100Percent};
  padding: ${size8} ${size12};
  border-radius: ${size20};
  border: 1px solid ${veryLightBrown};
  font-size: ${fontSize18};
  transition: border-color 0.25s;
  color: ${white};
  text-transform: capitalize;
  :focus {
    border-color: ${brown};
  }
  ::placeholder {
    color: ${veryLightBrown};
  }
  :disabled {
    background-color: ${veryLightGray};
  }
`

export default NumericInput
