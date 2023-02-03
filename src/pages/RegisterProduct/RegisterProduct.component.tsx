import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { RegisterProductInterface } from '../../models/interfaces/Product'
import Typography from '../../components/atoms/Typography'
import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import { toast } from 'react-toastify'
import NumericInputFormat from '../../components/atoms/NumericInputFormat'
import {
  ButtonWrapper,
  ColWrapper,
  ContentWrapper,
  ProductPreviewTitle,
  ProductCardBackground,
  ProductCardBackgroundWrapper,
  RowWrapper,
  PaperWrapper,
} from './RegisterProduct.styles'
import NumericInput from '../../components/atoms/NumericInput'
import ProductCard from '../../components/molecules/ProductCard'
import FormField from '../../components/molecules/FormField'

const ProductRegisterComponent = () => {
  const { control, handleSubmit, watch, setValue } = useForm<RegisterProductInterface>()

  const onSubmit = (data: RegisterProductInterface) => {
    toast.success(`O produto ${data.title} de valor R$ ${data.value} foi salvo!`)
  }

  const pasteLink = () => {
    navigator.clipboard.readText().then((text) => {
      text.length > 0
        ? setValue('imgUrl', text)
        : toast.error(
            'Sua área de transferência está vazia ou seu navegador não suporta este recurso.',
          )
    })
  }

  const defaultImage =
    'https://storage.googleapis.com/grandchef-apps/gc10362/images/products/62f54e9f74b4d.png'

  return (
    <ContentWrapper>
      <Typography>Registro de Produto</Typography>
      <PaperWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormField label={'Nome do produto'} placeholder={'Café com leite...'} {...field} />
            )}
          />
          <RowWrapper>
            <ColWrapper lg={7} md={7} sm={7} xs={7}>
              <Controller
                name="value"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormField
                    label={'Valor'}
                    otherFormField={
                      <NumericInputFormat
                        type="tel"
                        decimalSeparator=","
                        displayType="input"
                        allowLeadingZeros
                        allowNegative={false}
                        prefix="R$ "
                        decimalScale={2}
                        fixedDecimalScale={true}
                        {...field}
                      />
                    }
                  />
                )}
                defaultValue={0}
              />
            </ColWrapper>
            <ColWrapper lg={5} md={5} sm={5} xs={5}>
              <Controller
                name="imgUrl"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Button type="button" onClick={() => pasteLink()} {...field}>
                    Colar
                  </Button>
                )}
              />
            </ColWrapper>
          </RowWrapper>
          <RowWrapper>
            <ColWrapper>
              <Controller
                name="imgUrl"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormField
                    label="Url da Imagem"
                    {...field}
                    value={field.value ? field.value.trim() : field.value}
                    placeholder="http://imagem.com"
                  />
                )}
              />
            </ColWrapper>
          </RowWrapper>
          <ProductPreviewTitle>
            <Typography as="h2">Preview do Produto</Typography>
          </ProductPreviewTitle>
          <ProductCardBackgroundWrapper>
            <ProductCardBackground>
              <ProductCard
                imgUrl={
                  watch('imgUrl')
                    ? watch('imgUrl').length >= 1
                      ? watch('imgUrl')
                      : defaultImage
                    : defaultImage
                }
                title={
                  watch('title')
                    ? watch('title').length >= 1
                      ? watch('title')
                      : 'Nome do Produto'
                    : 'Nome do Produto'
                }
                price={watch('value')}
                inputQuantity={<NumericInput defaultValue={1} />}
                buttonText={'+'}
              />
            </ProductCardBackground>
          </ProductCardBackgroundWrapper>
          <ButtonWrapper>
            <Button behavior={'submit'}>{'Submit'}</Button>
          </ButtonWrapper>
        </form>
      </PaperWrapper>
    </ContentWrapper>
  )
}
export default ProductRegisterComponent
