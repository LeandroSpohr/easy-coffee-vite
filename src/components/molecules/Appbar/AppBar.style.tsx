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

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: ${sizes.size100};
`

export default AppBar
