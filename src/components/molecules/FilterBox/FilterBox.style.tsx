import styled, { css } from 'styled-components'

import { colors } from '../../../assets/styles/variables'

const { lightBrown } = colors

interface FilterBoxInterface {
  active: boolean
}

const FilterBox = styled.div`
  display: flex;
  background-color: ${lightBrown};
  button {
    display: none;
  }
  justify-content: space-between;

  ${({ active }: FilterBoxInterface) =>
    active &&
    css`
      width: 100%;
      height: 22rem;
      button {
        display: flex;
        height: 5rem;
        width: 5rem;
      }
    `};
`

export default FilterBox
