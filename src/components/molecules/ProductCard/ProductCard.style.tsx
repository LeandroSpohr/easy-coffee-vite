import styled, { css } from 'styled-components'

import { colors, sizes } from '../../../assets/styles/variables'

const { lightBrown } = colors
const { size5 } = sizes

interface ProductCardInterface {
  fluid?: boolean
}

const ProductCard = styled.div`
  background-color: ${lightBrown};
  color: white;
  border-radius: ${size5};

  ${({ fluid }: ProductCardInterface) =>
    fluid &&
    css`
      width: 100%;
      height: 100%;
    `};
`

export default ProductCard
