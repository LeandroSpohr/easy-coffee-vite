import { Col } from 'react-grid-system'
import styled from 'styled-components'
import { colors, sizes } from '../../../assets/styles/variables'

const { transparentBrown } = colors

const AppBar = styled.header`
  display: flex;
  position: absolute;
  align-items: center;
  background-color: ${transparentBrown};
  justify-content: space-between;
  width: ${sizes.size100Percent};
  border-radius: 0 0 ${sizes.size10} ${sizes.size10};
  height: ${sizes.size50};
`

export const InfoWrapper = styled.div`
  display: flex;
  margin-left: ${sizes.size20};
  justify-content: space-around;
  align-items: center;
`

export const IconWrapper = styled.div`
  display: flex;

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

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${sizes.size50Percent};
  max-width: ${sizes.size200};
  margin-right: ${sizes.size10};
`

export const ColWrapper = styled(Col)`
  display: flex;
  justify-content: end;
  margin-right: ${sizes.size10};
`

export default AppBar
