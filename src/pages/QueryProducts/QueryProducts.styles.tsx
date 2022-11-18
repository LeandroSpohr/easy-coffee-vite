import styled from 'styled-components'
import { Col } from 'react-grid-system'

import { sizes, colors } from '../../assets/styles/variables'

export const ColWrapper = styled(Col)`
  margin-block: ${sizes.size5};
`

export const ContentWrapper = styled.div`
  margin-top: ${sizes.size20};
  padding: ${sizes.size15};
  border-radius: ${sizes.size20} ${sizes.size20} 0 0;
  background-color: ${colors.transparentBrown};
  min-height: 100%;
`