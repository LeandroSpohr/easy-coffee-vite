import styled, { css } from 'styled-components'

import { colors, sizes } from '../../../assets/styles/variables'
import Typography from '../../atoms/Typography'

interface ProductCardInterface {
  fluid?: boolean
}

const ProductCard = styled.div`
  background: linear-gradient(180deg, transparent, ${colors.veryLightBrown} 50%);
  border-radius: ${sizes.size20};
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: -${sizes.size5} -${sizes.size5} ${sizes.size10} ${'#362511'};

  ${({ fluid }: ProductCardInterface) =>
    fluid &&
    css`
      width: 100%;
      height: 100%;
    `};
`

export const ImageWrapper = styled.div`
  min-height: ${sizes.size150};
  text-align: center;
  max-height: ${sizes.size150};
  border-radius: ${sizes.size20} ${sizes.size20} 0 0;
  margin-top: ${sizes.size5};
`

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: auto;
`

export const InfoWrapper = styled.div`
  text-align: center;
  border-radius: ${sizes.size20} ${sizes.size20} 0 0;
  margin-top: ${sizes.size10Percent};
  margin-bottom: ${sizes.size10};
`

export const PayWrapper = styled.div`
  display: flex;
  background-color: ${colors.darkerBrown};
  border-radius: 0 0 ${sizes.size18} ${sizes.size18};
  margin-top: 10%;
  justify-content: center;
  padding: 3%;
`

export const StyledTypo = styled(Typography)`
  color: ${colors.transparentBrown};
`

export default ProductCard
