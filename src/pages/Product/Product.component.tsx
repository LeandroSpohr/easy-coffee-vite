import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-grid-system'

import * as ProductService from '../../services/Product'

import ProductInterface from '../../models/interfaces/Product'

import Typography from '../../components/atoms/Typography'
import ProductCard from '../../components/molecules/ProductCard'

import { useUser } from '../../context/User'
import { useFormats } from '../../utils/useFormats'

const Product = () => {
  const { state } = useUser()
  const { getFirstName } = useFormats()
  const [products, setProducts] = useState<ProductInterface[]>([])

  useEffect(() => {
    ProductService.getAll().then(setProducts)
  }, [])

  return (
    <>
      <Typography>Olá {getFirstName(state.user?.name)}</Typography>
      <Typography>Produtos</Typography>
      <Row>
        {products.map((product) => (
          <Col lg={2} md={3} sm={4} xs={6} key={'col' + product.id}>
            <ProductCard
              key={'productCard' + product.id}
              fluid
              imgUrl={product.imgUrl}
              imgMaxWidth={'20rem'}
              imgMaxHeight={'15rem'}
              title={product.description}
              price={product.value}
              handleSubmit={function (): void {
                throw new Error('Function not implemented.')
              }}
            ></ProductCard>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Product
