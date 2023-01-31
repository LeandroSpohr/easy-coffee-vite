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
  align-items: center;
  border-radius: ${sizes.size20} ${sizes.size20} 0 0;
  background-color: ${colors.brown};
  border-radius: '1rem 1rem 0rem 0rem';
  margin-top: ${sizes.size20};
  height: 8%;
`
