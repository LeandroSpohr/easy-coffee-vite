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
import ProductCard from '../../components/molecules/ProductCard'
import NumericInputFormat from '../../components/atoms/NumericInputFormat'

const ProductRegisterComponent = () => {
  const { control, register, handleSubmit, watch } = useForm<RegisterProductInterface>()

  const {
    formState: { errors },
  } = useForm<RegisterProductInterface>()

  const onSubmit = (data: RegisterProductInterface) => {
    alert(JSON.stringify(data))
    toast.success(`Boa, o produto ${data.title} de valor R$ ${data.value} foi salvo!`)
  }

  return (
    <Container fullCentered fullHeight>
      <Paper>
        <Typography>Registro de Produto</Typography>

        {/* <FormWrapper> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input placeholder="Nome do produto..." {...field} />}
          />
          {errors.title && <h1>This field is required</h1>}
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
          {errors.value && <span>This field is required</span>}
          <Controller
            name="imgUrl"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} />}
            defaultValue={''}
          />
          {errors.imgUrl && <span>This field is required</span>}
          <Button type="submit">{'Submit'}</Button>
        </form>
        {/* </FormWrapper> */}
        {/* <ProductCardWrapper> */}
        <ProductCard
          imgUrl={watch('imgUrl')}
          title={watch('title')}
          price={watch('value')}
          handleSubmit={function (): void {
            throw new Error('Function not implemented.')
          }}
        ></ProductCard>
        {/* </ProductCardWrapper> */}
        {/* <Formik
          initialValues={{ desc: '', value: 0, img: '' }}
          // validate={(values) => {
          //   const errors = {}
          //   if (!values.cpf) {
            //     errors.cpf = 'Required'
            //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.cpf)) {
              //     errors.cpf = 'Invalid cpf address'
              //   }
              //   return errors
              // }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                }, 400)
              }}
              >
              {({ values, errors, touched, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                <Input type="text" name="desc" onChange={handleChange} value={values.desc} />
              {errors.desc && touched.desc && errors.desc}
              <NumericPattern
                type={'tel'}
                name="cpf"
                onChange={handleChange}
                format="R$ ##,##"
                placeholder="R$ 00,00"
              />
              {errors.value && touched.value && errors.value}
              <Input
                placeholder="Set your image address here"
                onChange={(e) => setImageState(e.target.value)}
              ></Input>
              {errors.desc && touched.desc && errors.desc}
              {/* <ImagePreviewWrapper>
                <ImagePreview src={imageState}></ImagePreview>
              </ImagePreviewWrapper>
              <ProductPreviewWrapper>
                <ProductCardPreview
                  imgSrc={imageState}
                  title={values.desc}
                  price={values.value}
                  handleSubmit={function (): void {
                    throw new Error('Function not implemented.')
                  }}
                ></ProductCardPreview>
              </ProductPreviewWrapper>
              <br />
              <Button type="submit">Submit</Button>
            </form>
          )}
        </Formik> */}
      </Paper>
    </Container>
  )
}
export default ProductRegisterComponent
