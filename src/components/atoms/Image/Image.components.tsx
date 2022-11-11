import React from 'react'
import { StyledComponentPropsWithRef } from 'styled-components'
import Image from './Image.style'

interface ImageInterface extends StyledComponentPropsWithRef<typeof Image> {
  source?: string
}

const ImageComponent: React.FC<ImageInterface> = ({ source, ...rest }: ImageInterface) => (
  <Image src={source} {...rest} />
)

export default ImageComponent
