import { Col, Row } from 'react-grid-system'
import styled from 'styled-components'
import { colors, sizes } from '../../assets/styles/variables'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${sizes.size15};
  border-radius: ${sizes.size20} ${sizes.size20} 0 0;
  background-color: ${colors.transparentBrown};
`

export const ProductCardBackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ProductCardBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.brown};
  height: ${sizes.size300};
  border-radius: ${sizes.size25};
  width: ${sizes.size250};
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`

export const ProductPreviewTitle = styled.div`
  text-align: center;
  background-color: ${colors.brown};
  border-radius: 2.5rem;
  margin-block: 2rem;
  margin-top: 5rem;
`

export const RowWrapper = styled(Row)`
  margin-top: ${sizes.size10};
`

export const ColWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: end;
`

export const PriceAndPasteWrapper = styled(Row)``
