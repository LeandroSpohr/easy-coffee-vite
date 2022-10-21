import React from 'react'
import {useUser} from '../../context/User'
import { ToastContainer } from 'react-toastify'

const Product = () => {
  const {state} = useUser()
  
  return (
    <>
      <ToastContainer />
      <h1> Produtos </h1>
      {state && state.user && state.user.name}
    </>
  )
}

export default Product 