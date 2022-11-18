import styled, { css } from 'styled-components'

import {sizes, colors} from '../../../assets/styles/variables'

const {size5} = sizes
const {brown} = colors

interface ImageInterface {
  maxWidth?: number | string
  maxHeight?: number | string
}

const Image = styled.img<ImageInterface>`
  max-width: ${({maxWidth}: ImageInterface) => (!maxWidth ? '100%' : maxWidth)};
  width: 150px;
  -webkit-filter: drop-shadow(${size5} ${size5} ${size5} ${brown});
  filter: drop-shadow(${size5} ${size5} ${size5} ${brown});

  ${({ maxHeight }: ImageInterface) =>
    css`
      max-height: ${maxHeight};
    `};
`

export default Image
