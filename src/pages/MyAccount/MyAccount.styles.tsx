import { Col } from 'react-grid-system'
import styled from 'styled-components'

import { sizes } from '../../assets/styles/variables'

interface WrapperInterface {
  centered?: boolean
}

export const ItemWrapper = styled.div`
  margin: ${sizes.size15};
`

export const FlexWrapper = styled.div<WrapperInterface>`
  display: flex;
  justify-content: ${({ centered }: WrapperInterface) => (!centered ? 'flex-end' : 'center')};
`

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${sizes.size10};
  margin-top: ${sizes.size15};
  padding-top: ${sizes.size10};
  padding-bottom: ${sizes.size10};
`

export const ColWrapper = styled(Col)`
  display: flex;
  justify-content: center;
`