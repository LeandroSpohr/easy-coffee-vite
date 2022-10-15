import React from 'react'
import {useUser} from '../../context/User'

const Product = () => {
  const {state} = useUser()
  console.log(state)
  return (
    <>
      <h1>Product</h1>
      {state && state.user && state.user.name}
    </>
  )
}

export default Product