import styled, {css} from 'styled-components'

import { colors, sizes } from '../../../assets/styles/variables'

const { veryLightBrown } = colors

interface PaperInterface {
  fluid?: boolean
  fullCentered?: boolean
}

const Paper = styled.div<PaperInterface>`
  background-color: ${veryLightBrown};
  color: white;
  border-radius: 15px;
  justify-content: ${({fullCentered}: PaperInterface) => (!fullCentered ? 'initial' : 'center')};
  align-items: ${({fullCentered}: PaperInterface) => (!fullCentered ? 'initial' : 'center')};
  text-align: ${({fullCentered}: PaperInterface) => (!fullCentered ? 'initial' : 'center')};
  padding: ${sizes.size25};

  ${({ fluid }: PaperInterface) => fluid && css`
    width: 100%;
    height: 100%;
  `};
`

export default Paper
