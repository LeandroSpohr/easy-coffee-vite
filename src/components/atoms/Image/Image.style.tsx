import styled, { css } from 'styled-components'
interface ImageInterface {
  maxWidth?: number | string
  maxHeight?: number | string
}

const Image = styled.img<ImageInterface>`
  ${({ maxWidth }: ImageInterface) =>
    css`
      max-width: ${maxWidth};
    `};
  ${({ maxHeight }: ImageInterface) =>
    css`
      max-height: ${maxHeight};
    `};
`

export default Image
