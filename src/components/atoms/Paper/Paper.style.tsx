import styled, {css} from 'styled-components'

import { colors } from '../../../assets/variables'

const { lightBrown } = colors

interface PaperInterface {
  fluid?: boolean
}

const Paper = styled.div<PaperInterface>`
  background-color: ${lightBrown};
  color: white;
  border-radius: 15px;

  ${({ fluid }: PaperInterface) => fluid && css`
    width: 100%;
    height: 100%;
  `};
`

export default Paper
