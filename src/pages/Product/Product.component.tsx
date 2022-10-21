import React from 'react'
import {useUser} from '../../context/User'
import { ToastContainer } from 'react-toastify'
import ProductCard from '../../components/atoms/Product Card'

const Product = () => {
  const {state} = useUser()
  
  return (
    <>
      <ToastContainer />
      <h1> Produtos </h1>
      <ProductCard handleSubmit={function (): void {
        // Solução Corriqueira 
        throw new Error('Function not implemented.')
      } }> Template para os Produtos </ProductCard>
      {state && state.user && state.user.name}
    </>
  )
}

export default Product 