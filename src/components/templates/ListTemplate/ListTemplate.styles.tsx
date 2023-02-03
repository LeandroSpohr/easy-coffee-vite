import styled from 'styled-components'

import { colors, sizes } from '../../../assets/styles/variables'

export const ContentWrapper = styled.div`
  padding: ${sizes.size15};
  background-color: ${colors.transparentBrown};
  min-height: 100%;
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.brown};
  border-radius: ${sizes.size10} ${sizes.size10} 0 0;
  margin-top: ${sizes.size20};
  height: ${sizes.size40};
`
