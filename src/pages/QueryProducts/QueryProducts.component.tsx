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
import { sizes, colors, margins } from '../../assets/styles/variables'
import Paper from '../../components/atoms/Paper'

const { size150, size30, size50, size10 } = sizes

const QueryProducts = () => {
  const { dispatch } = useUser()
  const [products, setProducts] = useState<ProductInterface[]>([])

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
      <Paper style={{ 
        width: size150, height: size50, padding: size10, backgroundColor: '#6b451ee6',
        borderRadius: '1rem 1rem 0rem 0rem'}}>
        <Typography>Produtos</Typography>
      </Paper>
      <ContentWrapper style={{margin: '0', borderRadius: '0rem 1rem'}}>
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
