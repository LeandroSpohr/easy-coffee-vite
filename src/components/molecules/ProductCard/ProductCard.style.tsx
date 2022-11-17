import styled, { css } from 'styled-components'

import { colors, sizes } from '../../../assets/styles/variables'

const { veryLightBrown } = colors

interface ProductCardInterface {
  fluid?: boolean
}

const ProductCard = styled.div`
  background-color: ${veryLightBrown};
  color: white;
  border-radius: ${sizes.size10};
  padding: ${sizes.size10};

  ${({ fluid }: ProductCardInterface) =>
    fluid &&
    css`
      width: 100%;
      height: 100%;
    `};
`

export default ProductCard
