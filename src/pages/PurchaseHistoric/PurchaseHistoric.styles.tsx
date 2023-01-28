import { Col } from 'react-grid-system'
import styled from 'styled-components'
import { colors, sizes } from '../../assets/styles/variables'

export const ItemWrapper = styled.div``

export const ContentWrapper = styled.div`
  margin-top: ${sizes.size20};
  border-radius: ${sizes.size20} ${sizes.size20} 0 0;
  background-color: ${colors.transparentBrown};
  min-height: 100%;
`

export const TitleWrapper = styled.div`
  text-align: center;
`

export const ColWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  text-align: center;
`
