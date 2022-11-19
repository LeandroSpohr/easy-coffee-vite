import styled from 'styled-components'

import { colors, fontSizes, sizes } from '../../../assets/styles/variables'

const {
  veryLightBrown, white, brown, veryLightGray,
} = colors

const { fontSize18 } = fontSizes

const {
  size8,
  size12, 
  size20, 
  size100Percent,
} = sizes

const Input = styled.input`
  border: none;
  background: ${brown};
  width: ${size100Percent};
  padding: ${size8} ${size12};
  border-radius: ${size20};
  border: 1px solid ${veryLightBrown};
  font-size: ${fontSize18};
  transition: border-color .25s;
  color: ${white};

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

export default Input
