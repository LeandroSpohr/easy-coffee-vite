import styled, { css } from 'styled-components'
import { colors, sizes, zIndex } from '../../../assets/styles/variables'

interface IBackground {
  depth?: 1 | 2 | 3 | 4 | 5,
  fillScreen?: boolean
  centerItems?: boolean
}

export const Background = styled.div<IBackground>`
  display: flex;
  position: fixed;
  background-color: ${colors.blackOpacity};
  z-index:  ${({ depth }: IBackground) => setDepth(depth)};

  ${({ centerItems }: IBackground) => centerItems && css`
    align-items: center;
    justify-content: center;
  `}

  ${({ fillScreen }: IBackground) => fillScreen && css`
    width: ${sizes.size100Percent};
    height: ${sizes.size100Percent};
  `}
`

const setDepth = (depth: number | undefined) => {
  switch (depth) {
    case 1: return zIndex.firstLayer
    case 2: return zIndex.secondLayer
    case 3: return zIndex.thirdLayer
    case 4: return zIndex.fourthLayer
    case 5: return zIndex.fifthLayer
    default: return zIndex.firstLayer
  }
}