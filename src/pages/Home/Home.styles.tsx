import styled from 'styled-components'

import { sizes } from '../../assets/styles/variables'

export const Wrapper = styled.div`
  margin-bottom: ${sizes.size50};
`

export const FieldContainer = styled.div`
  margin-block: ${sizes.size30};
`

export const FullScreenWrapper = styled.div`
  position: fixed;
  top: ${sizes.size10};
  left: ${sizes.size10};
`

export const ButtonWrapper = styled.div`
  margin-block: ${sizes.size10};
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  gap: ${sizes.size10};
`
