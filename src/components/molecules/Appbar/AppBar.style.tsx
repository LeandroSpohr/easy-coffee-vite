import { Col, Row } from 'react-grid-system'
import styled, { css } from 'styled-components'
import { colors, sizes } from '../../../assets/styles/variables'

const { transparentBrown } = colors

interface AppbarInterface {
  isVisible: boolean
}

const AppBar = styled.header<AppbarInterface>`
  display: none;
  position: fixed;
  background-color: ${transparentBrown};
  width: ${sizes.size100Percent};
  border-radius: 0 0 ${sizes.size10} ${sizes.size10};
  height: ${sizes.size50};
  z-index: 1;
  display: ${({ isVisible }: AppbarInterface) => (!isVisible ? 'none' : 'fixed')};
`

export const InfoWrapper = styled.div`
  margin-left: ${sizes.size10};
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

export const ActionsWrapper = styled(Row)`
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
