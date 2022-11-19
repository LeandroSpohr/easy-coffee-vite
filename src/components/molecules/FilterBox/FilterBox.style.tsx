import styled, { css } from 'styled-components'

import { colors } from '../../../assets/styles/variables'

const { lightBrown } = colors

interface FilterBoxInterface {
  active: boolean
}

const FilterBox = styled.div`
  background-color: ${lightBrown};

  div {
    display: none;
  }

  #submitButton {
    display: none;
  }

  ${({ active }: FilterBoxInterface) =>
    active &&
    css`
      display: initial
      width: 100%;

      div {
        display: initial;
      }

      button {
        display: flex;
      }

      #submitButton {
        display: initial;
      }
    `};
`

export default FilterBox
