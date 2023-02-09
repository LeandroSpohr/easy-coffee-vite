import { Col } from 'react-grid-system'
import styled from 'styled-components'

import { sizes } from '../../assets/styles/variables'

export const ItemWrapper = styled.div`
  margin: ${sizes.size15};
`

export const ColWrapper = styled(Col)``

export const OpenValueWrapper = styled.div`
  display: flex;
  justify-content: end;
  height: ${sizes.size100Percent};
  align-items: center;
`

export const PayAllWrapper = styled.div`
  display: flex;
  height: ${sizes.size100Percent};
  align-items: center;
`