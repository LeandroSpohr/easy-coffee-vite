import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-grid-system'

import * as ProductService from '../../services/Product'

import ProductInterface from '../../models/interfaces/Product'

import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'

import {useUser} from '../../context/User'
import { useFormats } from '../../utils/useFormats' 


const Cart = () => {
    
    const {formatCurrency} = useFormats()
    const [products, setProducts] = useState<ProductInterface[]>([])
  
    useEffect(() => {
      ProductService.getAll()
        .then(setProducts)
    }, [])

    return (
            <>
      <Typography>Carrinho</Typography>
      <Row>
        {products.map((product) => (
          <Col key={'col' + product.id}>
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
        <Col>
        <Typography as='h5'>Quantidade</Typography>
        </Col>
        <Col>
        <Typography as='h5'>Total</Typography>
        </Col>
      </Row>
    </>
    )
}

export default Cart