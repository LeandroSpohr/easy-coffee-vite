import styled, { css } from 'styled-components'

import { colors, sizes } from '../../../assets/styles/variables'

const { veryLightBrown, white } = colors

interface ProductCardInterface {
  fluid?: boolean
}

const ProductCard = styled.div`
  background-color: ${veryLightBrown};
  color: ${white};
  border-radius: ${sizes.size20};
  padding: ${sizes.size10};
  display: inline-grid;
  flex-flow: column;

  ${({ fluid }: ProductCardInterface) =>
    fluid &&
    css`
      width: 100%;
      height: 100%;
    `};
`

export const ImageWrapper = styled.div`
  height: ${sizes.size150};
  text-align: center;
`

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${sizes.size10};
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`

export default ProductCard
