import styled, { css } from 'styled-components'
interface ImageInterface {
  maxWidth?: number | string
  maxHeight?: number | string
}

const Image = styled.img<ImageInterface>`
  max-width: ${({maxWidth}: ImageInterface) => (!maxWidth ? '100%' : maxWidth)};

  ${({ maxHeight }: ImageInterface) =>
    css`
      max-height: ${maxHeight};
    `};
`

export default Image
