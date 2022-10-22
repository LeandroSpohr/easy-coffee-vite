import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-grid-system'

import * as ProductService from '../../services/Product'

import ProductInterface from '../../models/interfaces/Product'

import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'

import {useUser} from '../../context/User'
import { useFormats } from '../../utils/useFormats'

const Product = () => {
  const {state} = useUser()
  const {formatCurrency, getFisrtName} = useFormats()
  const [products, setProducts] = useState<ProductInterface[]>([])

  useEffect(() => {
    ProductService.getAll()
      .then(setProducts)
  }, [])

  return (
    <>
      <Typography>Olá {getFisrtName(state.user?.name)}</Typography>
      <Typography>Produtos</Typography>
      <Row>
        {products.map((product) => (
          <Col lg={2} md={3} sm={4} xs={6} key={'col' + product.id}>
            <Paper fluid key={'paper' + product.id}>
              <img style={{maxWidth: '150px', maxHeight: '150px'}} src={product.imgUrl} alt={product.description} />
              <Typography as='h4'>
                {product.description}
              </Typography>
              <Typography as='h5'>
                {formatCurrency(product.value)}
              </Typography>
            </Paper>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Product