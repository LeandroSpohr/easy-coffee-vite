import React from 'react'
import Button from '../Button'
import Typography from '../Typography'
import ProductCard from './ProductCard.style'
import Image from '../Image'

type ProductCardComponentInterface = {
  imgUrl: string
  title: string
  description: string
  buttonText: string
  price: number
  handleSubmit: () => void
};

const ProductCardComponent: React.FC<
  ProductCardComponentInterface
> = ({
  imgUrl, title, description, buttonText, price, handleSubmit 
}) => (
  <ProductCard>
    <Image source= { imgUrl } />
    <Typography as = 'h2'> { title } </Typography> 
    <Typography as = 'p'> { description } </Typography>
    <Typography as = 'p'> { buttonText } </Typography>
    <Typography as = 'p'> { price } </Typography> 
    <Button onClick={() => handleSubmit ()}/>

  </ProductCard>
  
)

export default ProductCardComponent