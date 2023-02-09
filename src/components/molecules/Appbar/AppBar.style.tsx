import { Col, Row } from 'react-grid-system'
import styled from 'styled-components'
import { colors, sizes, zIndex } from '../../../assets/styles/variables'


const AppBar = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  background-color: ${colors.brown};
  justify-content: center;
  width: ${sizes.size100Percent};
  border-radius: 0 0 ${sizes.size10} ${sizes.size10};
  height: ${sizes.size50};
  z-index: ${zIndex.firstLayer};
  box-shadow: 0 ${sizes.size5} ${sizes.size5} ${colors.darkerBrown};
`



export const IconWrapper = styled.div`
display: flex;
align-items: center;
:active {
  transition: 100ms;
    transform: scale(0.8);
    border-radius: ${sizes.size50Percent};
  }
  
  .badge {
    position: absolute;
    top: ${sizes.size4};
  }
  `

interface ColWrapperInterface {
  centeralized?: boolean
  ended?: string
}

export const ColWrapper = styled(Col) <ColWrapperInterface>`
  display: flex;
  justify-content: ${({ centeralized }: ColWrapperInterface) => (!centeralized ? '' : 'center')};
  justify-content: ${({ ended }: ColWrapperInterface) => (!ended ? '' : 'flex-end')};

`

export const IconColWrapper = styled(Col)`
  display: flex;
  justify-content: center;
`

export const RowWrapper = styled(Row)`
  width: ${sizes.size100Percent};
`
export default AppBar



