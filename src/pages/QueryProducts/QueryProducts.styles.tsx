import styled from 'styled-components'
import { Col } from 'react-grid-system'

import { colors, sizes } from '../../assets/styles/variables'

export const ColWrapper = styled(Col)`
  margin-block: ${sizes.size5};
`
export const WelcomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const TitleWrapper = styled.div`
  width: ${sizes.size100Percent};
  background-color: ${colors.darkerBrown};
  border-radius: ${sizes.size10};
  max-width: ${sizes.size590};
`