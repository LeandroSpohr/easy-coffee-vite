import React from 'react'
import { StyledComponentPropsWithRef } from 'styled-components'
import Image from './Image.style'

interface ImageInterface extends StyledComponentPropsWithRef<typeof Image> {
  source?: string
  maxWidth?: number | string
  maxHeight?: number | string
}

const ImageComponent: React.FC<ImageInterface> = ({
  source,
  maxWidth,
  maxHeight,
  ...rest
}: ImageInterface) => <Image src={source} maxWidth={maxWidth} maxHeight={maxHeight} {...rest} />

export default ImageComponent
