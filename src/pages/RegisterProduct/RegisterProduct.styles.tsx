import { Col, Row } from 'react-grid-system'
import styled from 'styled-components'
import { colors, sizes } from '../../assets/styles/variables'
import { Paper } from '../../components/atoms/Paper'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${sizes.size20} ${sizes.size20} 0 0;
  background-color: ${colors.transparentBrown};
  min-height: ${sizes.size102Percent};
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
  margin-top: ${sizes.size5Percent};
`

export const ProductPreviewTitle = styled.div`
  text-align: center;
  background-color: ${colors.brown};
  border-radius: ${sizes.size25};
  margin-block: ${sizes.size10};
  margin-top: ${sizes.size25};
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

export const PaperWrapper = styled(Paper)`
  width: ${sizes.size90Percent};
`
