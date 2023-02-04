import styled from 'styled-components'
import { sizes } from '../../../assets/styles/variables'

export const NoData = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`

export const ContentWrapper = styled.div`
  width: ${sizes.size90Percent};
  max-width: ${sizes.size300};
  margin-top: ${sizes.size5Percent};
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: ${sizes.size10};
  gap: ${sizes.size20}
`
