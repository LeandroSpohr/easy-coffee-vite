import React, { useEffect, useState } from 'react'
import { Row } from 'react-grid-system'

import * as ProductService from '../../services/Product'

import ProductInterface from '../../models/interfaces/Product'

import Typography from '../../components/atoms/Typography'
import Container from '../../components/atoms/Container'
import ProductCard from '../../components/molecules/ProductCard'
import {ColWrapper} from './QueryProducts.styles'

import { AddIcon } from '../../assets/icons'
import { sizes, colors } from '../../assets/styles/variables'

const { size150, size30 } = sizes
const { brown } = colors

const QueryProducts = () => {
  const [products, setProducts] = useState<ProductInterface[]>([])

  useEffect(() => {
    ProductService.getAll().then(setProducts)
  }, [])

  return (
    <Container displayBlock>
      <Typography color={brown}>Produtos</Typography>
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
              handleSubmit={() => null}
            ></ProductCard>
          </ColWrapper>
        ))}
      </Row>
    </Container>
  )
}

export default QueryProducts
