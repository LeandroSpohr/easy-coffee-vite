import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-grid-system'

import * as ProductService from '../../services/Product'

import ProductInterface from '../../models/interfaces/Product'

import Typography from '../../components/atoms/Typography'
import ProductCard from '../../components/molecules/ProductCard'

const QueryProducts = () => {
  const [products, setProducts] = useState<ProductInterface[]>([])

  useEffect(() => {
    ProductService.getAll().then(setProducts)
  }, [])

  return (
    <>
      {/* <QueryTemplate> */}
      <Typography>Temos isso para voc&#234;: </Typography>
      <Row>
        {products.map((product) => (
          <Col lg={2} md={3} sm={4} xs={6} key={'col' + product.id}>
            <ProductCard
              imgUrl={product.imgUrl}
              imgMaxWidth={'150px'}
              imgMaxHeight={'150px'}
              title={product.description}
              price={product.value}
              handleSubmit={function (): void {
                throw new Error('Function not implemented.')
              }}
            ></ProductCard>
          </Col>
        ))}
      </Row>
      {/* </QueryTemplate> */}
    </>
  )
}

export default QueryProducts
