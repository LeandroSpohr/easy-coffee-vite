import styled, { css } from 'styled-components'

import { colors, sizes } from '../../../assets/styles/variables'

const { veryLightBrown } = colors

interface ProductCardInterface {
  fluid?: boolean
}

const ProductCardPreview = styled.div`
  background-color: ${veryLightBrown};
  color: white;
  border-radius: ${sizes.size20};
  height: 90%;
  width: 70%;
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

export default ProductCardPreview
