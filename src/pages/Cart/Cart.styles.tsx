import styled from 'styled-components'

import { sizes, colors } from '../../assets/styles/variables'

interface WrapperInterface {
  centered?: boolean
}

export const ItemlWrapper = styled.div`
  margin: ${sizes.size15};
`

export const FlexWrapper = styled.div<WrapperInterface>`
  display: flex;
  justify-content: ${({centered}: WrapperInterface) => (!centered ? 'flex-end' : 'center')};
`

export const ContentWrapper = styled.div`
  margin-top: ${sizes.size20};
  padding: ${sizes.size15};
  border-radius: ${sizes.size20} ${sizes.size20} 0 0;
  background-color: ${colors.transparentBrown};
  min-height: 100%;
`