import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { RegisterProductInterface } from '../../models/interfaces/Product'
import Input from '../../components/atoms/Input'
import Typography from '../../components/atoms/Typography'
import Paper from '../../components/atoms/Paper'
import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import { toast } from 'react-toastify'
// import { FormWrapper, ProductCardWrapper } from './ProductRegister.styles'
import NumericInputFormat from '../../components/atoms/NumericInputFormat'
import {
  ButtonWrapper,
  ContentWrapper,
  FieldsWrapper,
  FormWrapper,
  PaperWrapper,
  ProductCardBackground,
  ProductCardWrapper,
  StyledPaper,
} from './RegisterProduct.styles'
import ProductCardPreview from '../../components/molecules/ProductCardPreview'
import NumericInput from '../../components/atoms/NumericInput'

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
        <PaperWrapper>
          <StyledPaper>
            <FormWrapper>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="title"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input placeholder="Nome do produto" {...field} defaultValue={'a'} />
                  )}
                />
                <br />
                <FieldsWrapper>
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
                        value={'00,00'}
                        prefix="R$ "
                        decimalScale={2}
                        fixedDecimalScale={true}
                      />
                    )}
                    defaultValue={0}
                  />
                  <Controller
                    name="imgUrl"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Button type="button" onClick={(e) => pasteLink(e)} {...field}>
                        Colar Imagem
                      </Button>
                    )}
                  />
                </FieldsWrapper>
                <br />
                <Controller
                  name="imgUrl"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={field.value ? field.value.trim() : field.value}
                      placeholder="URL da imagem"
                    />
                  )}
                />

                <br />
                <br />
                <Typography>Product Preview</Typography>
                <ProductCardWrapper>
                  <ProductCardBackground>
                    <ProductCardPreview
                      imgUrl={watch('imgUrl')}
                      title={watch('title')}
                      price={watch('value')}
                      inputQuantity={<NumericInput value={'1'} />}
                      buttonText={'+'}
                    />
                  </ProductCardBackground>
                </ProductCardWrapper>
                <ButtonWrapper>
                  <Button type="submit">{'Submit'}</Button>
                </ButtonWrapper>
              </form>
            </FormWrapper>
          </StyledPaper>
        </PaperWrapper>
      </ContentWrapper>
    </Container>
  )
}
export default ProductRegisterComponent
