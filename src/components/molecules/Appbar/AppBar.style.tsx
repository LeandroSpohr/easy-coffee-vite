import styled from 'styled-components'
import { colors, sizes } from '../../../assets/styles/variables'

const { transparentBrown } = colors

const AppBar = styled.header`
  display: flex;
  position: absolute;
  align-items: center;
  background-color: ${transparentBrown};
  justify-content: space-between;
  width: 100%;
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
    border-radius: 50%;
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
export const LogoutModal = styled.div`
  h1 {
    display: flex;
    justify-content: center;
  }
`

export const LogoutConfButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: ${sizes.size10};
`

export default AppBar
