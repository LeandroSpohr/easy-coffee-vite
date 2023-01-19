import React from 'react'
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'
import Image from '../../atoms/Image'

import ProductCard, { InfoWrapper, ImageWrapper, ActionWrapper } from './ProductCard.style'
import { useFormats } from '../../../utils/useFormats'
import { ButtonEnum } from '../../../models/Enums/Button'

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
  inputQuantity?: JSX.Element
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
  inputQuantity,
}) => {
  const { formatCurrency } = useFormats()

  return (
    <ProductCard fluid={fluid}>
      <ImageWrapper>
        <Image source={imgUrl} maxWidth={imgMaxWidth} maxHeight={imgMaxHeight} />
      </ImageWrapper>
      <InfoWrapper>
        <div>
          <Typography as="h3"> {title} </Typography>
          <Typography as="p"> {description} </Typography>
          <Typography as="p"> {formatCurrency(price)} </Typography>
        </div>
        <div>
          <ActionWrapper>
            {inputQuantity}
            <Button buttonType={ButtonEnum.CircleButton} onClick={() => handleSubmit()}>
              {buttonText}
            </Button>
          </ActionWrapper>
        </div>
      </InfoWrapper>
    </ProductCard>
  )
}

export default ProductCardComponent
