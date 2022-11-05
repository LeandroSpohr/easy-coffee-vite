import React from 'react'


interface ImageInterface{
  source?: string
}

const ImageComponent: React.FC<
ImageInterface
> = ({
  source
}: ImageInterface) => (
  <img src={source}/>
)

export default ImageComponent