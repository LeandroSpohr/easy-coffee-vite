import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { RegisterProductInterface } from '../../models/interfaces/Product'
import Input from '../../components/atoms/Input'
import Typography from '../../components/atoms/Typography'
import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import { toast } from 'react-toastify'
import NumericInputFormat from '../../components/atoms/NumericInputFormat'
import {
  ButtonWrapper,
  ColWrapper,
  ContentWrapper,
  FormWrapper,
  ProductPreviewTitle,
  ProductCardBackground,
  ProductCardBackgroundWrapper,
  RowWrapper,
  StyledPaper,
} from './RegisterProduct.styles'
import NumericInput from '../../components/atoms/NumericInput'
import ProductCard from '../../components/molecules/ProductCard'
import { ButtonEnum } from '../../models/Enums/Button'

const ProductRegisterComponent = () => {
  const { control, register, handleSubmit, watch, setValue } = useForm<RegisterProductInterface>()

  const onSubmit = (data: RegisterProductInterface) => {
    alert(JSON.stringify(data))
    toast.success(`Boa, o produto ${data.title} de valor R$ ${data.value} foi salvo!`)
  }

  const pasteLink = (e: any) => {
    navigator.clipboard.readText().then((text) => {
      text.length > 0
        ? setValue('imgUrl', text)
        : toast.error(
            'Sua área de transferência está vazia ou seu navegador não suporta este recurso.',
            { theme: 'colored', position: 'top-center' },
          )
    })
  }

  return (
    <Container fullCentered fullHeight>
      <ContentWrapper>
        <Typography>Registro de Produto</Typography>
        <StyledPaper>
          <FormWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
              <RowWrapper>
                <ColWrapper>
                  <Controller
                    name="title"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input placeholder="Nome do produto..." {...field} />}
                  />
                </ColWrapper>
              </RowWrapper>
              <RowWrapper>
                <ColWrapper lg={8} md={8} sm={8} xs={7.5}>
                  <Controller
                    name="value"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <NumericInputFormat
                        type="tel"
                        decimalSeparator=","
                        displayType="input"
                        {...field}
                        allowLeadingZeros
                        allowNegative={false}
                        prefix="R$ "
                        decimalScale={2}
                        fixedDecimalScale={true}
                      />
                    )}
                    defaultValue={0}
                  />
                </ColWrapper>
                <ColWrapper lg={2} md={3} sm={4} xs={1}>
                  <Controller
                    name="imgUrl"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Button type="button" onClick={(e) => pasteLink(e)} {...field}>
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
                      <Input
                        {...field}
                        value={field.value ? field.value.trim() : field.value}
                        placeholder="URL da imagem..."
                      />
                    )}
                  />
                </ColWrapper>
              </RowWrapper>
              <ProductPreviewTitle>
                <Typography as="h2">Product Preview</Typography>
              </ProductPreviewTitle>

              <ProductCardBackgroundWrapper>
                <ProductCardBackground>
                  <ProductCard
                    imgUrl={watch('imgUrl')}
                    title={watch('title') != null ? watch('title') : 'Nome do produto'}
                    price={watch('value')}
                    inputQuantity={<NumericInput value={'1'} />}
                    buttonText={'+'}
                    handleSubmit={function (): void {
                      throw new Error('Function not implemented.')
                    }}
                  />
                </ProductCardBackground>
              </ProductCardBackgroundWrapper>
              <ButtonWrapper>
                <Button type="submit">{'Submit'}</Button>
              </ButtonWrapper>
            </form>
          </FormWrapper>
        </StyledPaper>
      </ContentWrapper>
    </Container>
  )
}
export default ProductRegisterComponent
