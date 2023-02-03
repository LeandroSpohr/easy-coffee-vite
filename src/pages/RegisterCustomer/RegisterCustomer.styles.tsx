import styled from 'styled-components'

import { colors, sizes } from '../../assets/styles/variables'

export const Wrapper = styled.div`
`

export const FieldContainer = styled.div`
  margin-block: ${sizes.size10};
`

export const InputWrapper = styled.div`
  margin-block: ${sizes.size10};
  text-align: left;
`

export const ButtonWrapper = styled.div`
  margin-block: ${sizes.size10};
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  gap: ${sizes.size10};
`

export const ContentWrapper = styled.div`
  padding: ${sizes.size15};
  background-color: ${colors.transparentBrown};
  border-radius: ${sizes.size20};
`