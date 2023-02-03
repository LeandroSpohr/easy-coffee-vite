import styled from 'styled-components'

import { sizes } from '../../assets/styles/variables'

interface WrapperInterface {
  centered?: boolean
}

export const ItemWrapper = styled.div`
  margin-bottom: ${sizes.size15};
`

export const FlexWrapper = styled.div<WrapperInterface>`
  display: flex;
  justify-content: ${({ centered }: WrapperInterface) => (!centered ? 'flex-end' : 'center')};
`
