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

export const IcoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-Right: ${sizes.size5};
  padding-Left: ${sizes.size5};
  position: relative;
  margin-Right: ${sizes.size8};
  margin-Left: ${sizes.size5};

  :active{
    transition: 100ms;
    transform: scale(0.80);
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

export default AppBar
