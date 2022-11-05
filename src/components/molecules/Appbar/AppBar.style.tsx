import styled from 'styled-components'
// interface AppBarInterface {
//   fullHeight?: boolean
//   fullCentered?: boolean
// }
import { colors } from '../../../assets/styles/variables'

const { black } = colors

const AppBar = styled.nav`
  background-color: ${black};
  display: flex;
  justify-content: space-around;
  margin: auto;
`

export default AppBar
