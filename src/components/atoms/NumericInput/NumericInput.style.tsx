import styled from 'styled-components'

import { colors, fontSizes, sizes } from '../../../assets/styles/variables'

const {
  veryLightBrown, white, brown, veryLightGray,
} = colors

const { fontSize18 } = fontSizes

const {
  size20, 
} = sizes

export const Container = styled.div`
  input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  border: none;
  background: ${brown};
  border-radius: ${size20};
  border: 1px solid ${veryLightBrown};
  font-size: ${fontSize18};
  transition: border-color .25s;
  color: ${white};
  display: flex;
  align-items: center;
  justify-content: space-around;

  :focus {
    border:none;
  }
`

const NumericInput = styled.input`
  border: none;
  background: ${brown};
  font-size: ${fontSize18};
  transition: border-color .25s;
  color: ${white};
  resize: horizontal;
  width: ${size20};
  text-align: center;

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
