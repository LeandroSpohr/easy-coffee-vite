import React from 'react'
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'
import Image from '../../atoms/Image'
import ProductCard from './ProductCard.style'
import { useFormats } from '../../../utils/useFormats'

type ProductCardComponentInterface = {
  fluid?: boolean
  imgUrl: string
  imgMaxWidth?: number | string
  imgMaxHeight?: number | string
  title: string
  description?: string
  buttonText?: string
  price: number
  handleSubmit: () => void
}

const ProductCardComponent: React.FC<ProductCardComponentInterface> = ({
  imgUrl,
  imgMaxWidth,
  imgMaxHeight,
  title,
  description,
  buttonText,
  price,
  handleSubmit,
  fluid,
}) => {
  const { formatCurrency } = useFormats()

  return (
    <ProductCard fluid={fluid}>
      <Image source={imgUrl} maxWidth={imgMaxWidth} maxHeight={imgMaxHeight} />
      <Typography as="h2"> {title} </Typography>
      <Typography as="p"> {description} </Typography>
      <Typography as="p"> {buttonText} </Typography>
      <Typography as="p"> {formatCurrency(price)} </Typography>
      <Button onClick={() => handleSubmit()} />
    </ProductCard>
  )
}

export default ProductCardComponent
