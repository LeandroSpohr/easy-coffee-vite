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

interface DetailsInterface {
  isVisible?: boolean
}

export const DetailsWrapper = styled.div<DetailsInterface>`
  display: none;
  ${({ isVisible }: DetailsInterface) =>
    isVisible &&
    css`
      display: inherit;
      border: ${sizes.size5} solid ${colors.veryLightBrown};
      border-radius: ${sizes.size5};
    `}
`

export const DetailsHeaderWrapper = styled.div`
  background-color: ${colors.brown};
  padding-top: ${sizes.size10};
  padding-bottom: ${sizes.size10};
  border-radius: ${sizes.size15} ${sizes.size15} 0 0;
`

export const DetailsInfoWrapper = styled.div`
  background-color: ${colors.lightBrown};
  border-radius: 0 0 ${sizes.size5} ${sizes.size5};
  padding-top: ${sizes.size10};
  padding-bottom: ${sizes.size10};
`
