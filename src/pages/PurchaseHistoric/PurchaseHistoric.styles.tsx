import { Col } from 'react-grid-system'
import styled, { css } from 'styled-components'
import { colors, sizes } from '../../assets/styles/variables'

export const ItemWrapper = styled.div``

export const ContentWrapper = styled.div`
  margin-top: ${sizes.size20};
  border-radius: ${sizes.size20} ${sizes.size20} 0 0;
  background-color: ${colors.transparentBrown};
  min-height: ${sizes.size100Percent};
`

export const TitleWrapper = styled.div`
  text-align: center;
`

export const ColWrapper = styled(Col)``

export const IconColWrapper = styled(Col)`
  display: flex;
  justify-content: flex-end;
`

interface MoreDetailsInterface {
  isVisible?: boolean | null
}

export const MoreDetailsWrapper = styled.div<MoreDetailsInterface>`
  display: none;
  ${({ isVisible }: MoreDetailsInterface) =>
    isVisible &&
    css`
      display: initial;
    `}
`
