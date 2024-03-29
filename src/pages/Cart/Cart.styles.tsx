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

export const FlexEndWrapper = styled.div`
  text-align: end;
`