import React from 'react'
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'
import Image from '../../atoms/Image'

import ProductCard, {
  InfoWrapper,
  ImageWrapper,
  ActionWrapper,
  PayWrapper,
  StyledTypo,
} from './ProductCard.style'

import { useFormats } from '../../../utils/useFormats'
import { ButtonEnum } from '../../../models/Enums/Button'
import { AddToCartIcon } from '../../../assets/icons'
import { sizes } from '../../../assets/styles/variables'

type ProductCardComponentInterface = {
  imgUrl: string
  title: string
  description?: string
  buttonText?: string | JSX.Element
  price: number
  handleCartSubmit: () => void
  handleSingleItemSubmit: () => void
  inputQuantity?: JSX.Element
}

const ProductCardComponent: React.FC<ProductCardComponentInterface> = ({
  imgUrl,
  title,
  price,
  handleCartSubmit,
  handleSingleItemSubmit,
  inputQuantity,
}) => {
  const { formatCurrency } = useFormats()

  return (
    <ProductCard>
      <ImageWrapper>
        <Image source={imgUrl} />
      </ImageWrapper>
      <InfoWrapper>
        <Typography as="h4"> {formatCurrency(price)} </Typography>
        <StyledTypo as="h2"> {title} </StyledTypo>
      </InfoWrapper>
      <ActionWrapper>
        {inputQuantity}
        <Button buttonType={ButtonEnum.CircleButton} onClick={() => handleCartSubmit()}>
          <AddToCartIcon size={sizes.size28} />
        </Button>
      </ActionWrapper>
      <PayWrapper onClick={handleSingleItemSubmit}>
        <Typography as="h3">Comprar agora</Typography>
      </PayWrapper>
    </ProductCard>
  )
}

export default ProductCardComponent
