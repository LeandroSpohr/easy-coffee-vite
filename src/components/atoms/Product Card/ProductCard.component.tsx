import React from 'react'
import Button from '../Button'
import ProductCard from './ProductCard.style'

type ProductCardComponentInterface = {
  children?: string,
  imgUrl?: string,
  title?: string,
  description?: string,
  buttonText?: string,
  price?: number,
  handleSubmit: () => void
};

const ProductCardComponent: React.FC<
  ProductCardComponentInterface
> = ({
  children, imgUrl, title, description, buttonText, price, handleSubmit 
}) => (
  <ProductCard>
    { children }
    { imgUrl }
    { title }
    { description }
    { buttonText }
    { price }
    return(
    <Button onClick={() => handleSubmit ()}/>
    )
  </ProductCard>
  
  //

)

export default ProductCardComponent