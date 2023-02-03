import styled from 'styled-components'
import { Col } from 'react-grid-system'

import { colors, sizes } from '../../assets/styles/variables'

export const ColWrapper = styled(Col)`
  margin-block: ${sizes.size5};
`
export const WelcomeWrapper = styled.div`
  text-align: center;
  background-color: ${colors.darkerBrown};
  border-radius: ${sizes.size10};
`