import { Col } from 'react-grid-system'
import styled from 'styled-components'
import { colors, sizes } from '../../../assets/styles/variables'

const { transparentBrown } = colors

export const AppBarWrapper = styled.header`
`

const AppBar = styled.div`
background-color: ${transparentBrown};
width: ${sizes.size100Percent};
border-radius: 0 0 ${sizes.size10} ${sizes.size10};
height: ${sizes.size50};
z-index: 1;`

export const InfoWrapper = styled.div`
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

export const ColWrapper = styled(Col)`
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: end;
`

export default AppBar
