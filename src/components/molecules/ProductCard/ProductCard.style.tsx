import styled from 'styled-components'

import { colors, sizes } from '../../../assets/styles/variables'

const { lightBrown } = colors
const { size5 } = sizes

const ProductCard = styled.div`
  background-color: ${lightBrown};
  color: white;
  border-radius: ${size5};
`

export default ProductCard
