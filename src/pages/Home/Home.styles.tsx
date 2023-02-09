import styled from 'styled-components'

import { colors, sizes } from '../../assets/styles/variables'

export const Wrapper = styled.div`
  margin-bottom: ${sizes.size40};
`

export const FieldContainer = styled.div`
  margin-bottom: ${sizes.size30};
`

export const FullScreenWrapper = styled.div`
  position: fixed;
  top: ${sizes.size10};
  left: ${sizes.size10};
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: ${sizes.size10}
`

export const ContentWrapper = styled.div`
  padding: ${sizes.size15};
  background-color: ${colors.transparentBrown};
  border-radius: ${sizes.size20};
`