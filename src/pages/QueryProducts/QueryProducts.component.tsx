import React, { useEffect, useState } from 'react'
import { Row } from 'react-grid-system'
import { toast } from 'react-toastify'

import * as ProductService from '../../services/Product'

import ProductInterface from '../../models/interfaces/Product'
import CartInterface from '../../models/interfaces/Cart'

import Typography from '../../components/atoms/Typography'
import Container from '../../components/atoms/Container'
import NumericInput from '../../components/atoms/NumericInput'
import ProductCard from '../../components/molecules/ProductCard'
import { ColWrapper, ContentWrapper } from './QueryProducts.styles'

import { useUser } from '../../context/User'

import { colors } from '../../assets/styles/variables'
import { useModal } from '../../context/Modal'
import { useFormats } from '../../utils/useFormats'
import Button from '../../components/atoms/Button'
import { PurchaseInputInterface } from '../../models/interfaces/Purchase'
import * as PurchaseService from '../../services/Purchase'
import { useNavigation } from '../../utils/useNavigation'

const { brown } = colors

const QueryProducts = () => {
  const { dispatch: userDispatch, state: userState } = useUser()
  const { dispatch: modalDispatch } = useModal()
  const [products, setProducts] = useState<CartInterface[]>([])
  const { formatCurrency } = useFormats()
  const { goToMyAccount } = useNavigation()

  const addToCart = (productCart: CartInterface) => {
    userDispatch({
      type: 'ADD_PRODUCT_TO_CART',
      payload: productCart,
    })
    toast.success('Produto adicionado ao carrinho!')
  }

  const handleChangeProductQuantity = (productCart: CartInterface, value: string) => {
    const updatedeProducts = products
    const someProductIndex = updatedeProducts.findIndex(
      (cartProduct) => cartProduct.product.id === productCart.product.id,
    )
    if (someProductIndex !== -1) {
      updatedeProducts[someProductIndex].quantity = +value
    }

    setProducts([...updatedeProducts])
  }

  const saveSinglePurchase = (input: PurchaseInputInterface) => {
    userState.user
      ? PurchaseService.savePurchases(userState.user?.id, [input]).then(() => {
          goToMyAccount(), closeModal()
        })
      : null
  }

  const closeModal = () => {
    modalDispatch({
      type: 'CLOSE_MODAL',
    })
  }

  const displaySinglePurchaseModal = (productCard: CartInterface) => {
    modalDispatch({
      type: 'SET_MODAL',
      payload: {
        content: singlePurchaseModal(
          productCard.product.id,
          productCard.product.description,
          productCard.product.value,
          productCard.quantity,
        ),
      },
    })
  }

  const singlePurchaseModal = (
    productId: string,
    productDesc: string,
    productValue: number,
    quantity: number,
  ) => {
    const totalValue = productValue * quantity

    return (
      <>
        <Typography>
          Deseja comprar {quantity} unidade{quantity > 1 ? 's' : ''} de {productDesc.toLowerCase()}{' '}
          por {formatCurrency(totalValue)}?
        </Typography>
        <Button
          onClick={() => {
            saveSinglePurchase({ productId, quantity })
          }}
        >
          Sim
        </Button>
      </>
    )
  }

  useEffect(() => {
    ProductService.getAll().then((response) => {
      const productsCart: CartInterface[] = response.map((product: ProductInterface) => ({
        product,
        quantity: 1,
      }))
      setProducts(productsCart)
    })
  }, [])

  return (
    <Container displayBlock fullHeight>
      <Typography color={brown}>Produtos</Typography>
      <ContentWrapper>
        <Row>
          {products.map((productCart) => (
            <ColWrapper lg={2} md={3} sm={4} xs={6} key={'col' + productCart.product.id}>
              <ProductCard
                key={'productCard' + productCart.product.id}
                imgUrl={productCart.product.imgUrl}
                title={productCart.product.description}
                price={productCart.product.value}
                inputQuantity={
                  <NumericInput
                    size={1}
                    min={1}
                    max={15}
                    step={1}
                    value={productCart.quantity}
                    onChange={(event) =>
                      handleChangeProductQuantity(productCart, event.target.value)
                    }
                  />
                }
                handleCartSubmit={() => addToCart(productCart)}
                handleSingleItemSubmit={() => displaySinglePurchaseModal(productCart)}
              ></ProductCard>
            </ColWrapper>
          ))}
        </Row>
      </ContentWrapper>
    </Container>
  )
}

export default QueryProducts
