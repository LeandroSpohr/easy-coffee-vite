import React, { useEffect, useState } from 'react'
import { Row } from 'react-grid-system'

import * as ProductService from '../../services/Product'

import ProductInterface from '../../models/interfaces/Product'

import Typography from '../../components/atoms/Typography'
import Container from '../../components/atoms/Container'
import ProductCard from '../../components/molecules/ProductCard'
import {ColWrapper} from './QueryProducts.styles'

import { sizes } from '../../assets/styles/variables'

const { size150 } = sizes

const QueryProducts = () => {
  const [products, setProducts] = useState<ProductInterface[]>([])

  useEffect(() => {
    ProductService.getAll().then(setProducts)
  }, [])

  return (
    <Container displayBlock>
      {/* <QueryTemplate> */}
      <Typography>Produtos: </Typography>
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
              handleSubmit={() => null}
            ></ProductCard>
          </ColWrapper>
        ))}
      </Row>
      {/* </QueryTemplate> */}
    </Container>
  )
}

export default QueryProducts
