import React from 'react'
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'
import Image from '../../atoms/Image'

import ProductCard, {InfoWrapper} from './ProductCard.style'
import { useFormats } from '../../../utils/useFormats'

type ProductCardComponentInterface = {
  fluid?: boolean
  imgUrl: string
  imgMaxWidth?: number | string
  imgMaxHeight?: number | string
  title: string
  description?: string
  buttonText?: string | JSX.Element
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
      <InfoWrapper>
        <div>
          <Typography as="h3"> {title} </Typography>
          <Typography as="p"> {description} </Typography>
          <Typography as="p"> {formatCurrency(price)} </Typography>
        </div>
        <Button onClick={() => handleSubmit()}>{buttonText}</Button>
      </InfoWrapper>
    </ProductCard>
  )
}

export default ProductCardComponent
