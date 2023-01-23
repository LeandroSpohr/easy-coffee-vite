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
  padding: ${sizes.size5};
`

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

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
  justify-content: space-around;
  width: ${sizes.size150};
`

export default AppBar
