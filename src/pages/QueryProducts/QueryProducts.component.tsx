import React, { useEffect, useState } from 'react'
import { Row } from 'react-grid-system'
import { toast } from 'react-toastify'

import * as ProductService from '../../services/Product'

import ProductInterface from '../../models/interfaces/Product'
import CartInterface from '../../models/interfaces/Cart'

import Typography from '../../components/atoms/Typography'
import Container from '../../components/atoms/Container'
import ProductCard from '../../components/molecules/ProductCard'
import {ColWrapper, ContentWrapper} from './QueryProducts.styles'

import { useUser } from '../../context/User'

import { AddIcon } from '../../assets/icons'
import { sizes, colors } from '../../assets/styles/variables'

const { size150, size30 } = sizes
const { brown } = colors

const QueryProducts = () => {
  const { state, dispatch } = useUser()
  const [products, setProducts] = useState<ProductInterface[]>([])
  console.log(state)
  const addToCart = (product: ProductInterface) => {
    const productCart: CartInterface = {
      product,
      quantity: 1,
    }
    dispatch({
      type: 'ADD_PRODUCT_TO_CART',
      payload: productCart,
    })
    toast.success('Produto adicionado ao carrinho!')
  }

  useEffect(() => {
    ProductService.getAll().then(setProducts)
  }, [])

  return (
    <Container displayBlock fullHeight>
      <Typography color={brown}>Produtos</Typography>
      <ContentWrapper>
        <Row>
          {products.map((product) => (
            <ColWrapper lg={2} md={3} sm={4} xs={6} key={'col' + product.id}>
              <ProductCard
                key={'productCard' + product.id}
                fluid
                imgUrl={product.imgUrl}
                imgMaxHeight={size150}
                title={product.description}
                price={product.value}
                buttonText={<AddIcon size={size30} />}
                handleSubmit={() => addToCart(product)}
              ></ProductCard>
            </ColWrapper>
          ))}
        </Row>
      </ContentWrapper>
    </Container>
  )
}

export default QueryProducts
