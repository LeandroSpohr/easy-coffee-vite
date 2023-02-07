import styled from 'styled-components'

import { colors, sizes } from '../../../assets/styles/variables'
import Typography from '../../atoms/Typography'


const ProductCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: ${sizes.size20};
  background: linear-gradient(180deg, transparent, ${colors.veryLightBrown} ${sizes.size50Percent});
  box-shadow: -${sizes.size5} -${sizes.size5} ${sizes.size10} ${colors.darkerBrown};
  width: ${sizes.size100Percent};
  height: ${sizes.size100Percent};
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
  margin-top: ${sizes.size10Percent};
  justify-content: center;
  padding: ${sizes.size3};

  :active {
    transition: 50ms;
    transform: scale(0.95);
  }
`

export const StyledTypo = styled(Typography)`
  color: ${colors.transparentBrown};
`

export default ProductCard
