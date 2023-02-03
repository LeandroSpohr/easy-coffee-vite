import React from 'react'
import { toast } from 'react-toastify'

import * as UserService from '../../services/Users'
import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Image from '../../components/atoms/Image'

import coffeeCup from '../../assets/images/coffeeCup.svg'
import { Wrapper, FieldContainer } from './RegisterCustomer.styles'

import { UserInputInterface } from '../../models/interfaces/User'

import { useUser } from '../../context/User'
import { colors, sizes } from '../../assets/styles/variables'
import { useNavigation } from '../../utils/useNavigation'
import { useValidate } from '../../utils/useValidate'
import { useRemove } from '../../utils/useRemove'
import CPFInput from '../../components/atoms/CPFInput'
import { Formik, useFormik } from 'formik'
import { ButtonEnum } from '../../models/Enums/Button'
import FormField from '../../components/molecules/FormField'

const { brown } = colors
const { size200 } = sizes

const RegisterCustomer = () => {
  const { dispatch } = useUser()
  const { goToProducts } = useNavigation()
  const { validateCPF } = useValidate()
  const { removeCPFMask } = useRemove()

  const handleSubmit = () => {
    if (validateCPF(formik.values.cpf)) {
      const newUser: UserInputInterface = { ...formik.values }
      newUser.cpf = removeCPFMask(formik.values.cpf)
      newUser.birthDate = new Date(formik.values.birthDate)

      UserService.save(newUser).then((response) => {
        dispatch({
          type: 'ADD_USER',
          payload: response,
        })
      }).then(() => goToProducts())
    } else toast.error(`${'CPF inválido'}`)
  }


  const formik = useFormik({
    initialValues: { cpf: '', name: '', birthDate: new Date() },
    onSubmit: () => {
      if (!formik.values.cpf || !formik.values.name || !formik.values.birthDate) {
        toast.warn('Preencha todos os campos')
        return
      }
      if (validateCPF(formik.values.cpf)) {
        handleSubmit()
      } else toast.error('CPF inválido')
    }
  })

  return (
    <Container fullHeight fullCentered>
      <Paper fullCentered>
        <Wrapper>
          <Image src={coffeeCup} maxHeight={size200} maxWidth={3} />
          <Typography color={brown}>Easy Coffee</Typography>
        </Wrapper>
        <Formik
          initialValues={{ cpf: '', name: '', birthDate: '' }}
          validate={values => {
            if (!values.cpf) {
              console.log('no')
            }
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <FieldContainer>

                <FormField label='CPF' otherFormField={
                  <CPFInput
                    type="tel"
                    name="cpf"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cpf}
                  />} />
              </FieldContainer>
              {errors.cpf && touched.cpf && errors.cpf}
              <FieldContainer>
                <FormField
                  label='Nome'
                  name="name"
                  placeholder='Digite seu nome'
                  onChange={handleChange}
                  value={values.name}
                />
              </FieldContainer>
              <FieldContainer>
                <FormField
                  label='Data de Nascimento'
                  name="birthDate"
                  type="date"
                  onChange={handleChange}
                  value={values.birthDate}
                />
              </FieldContainer>
              {errors.birthDate && touched.birthDate && errors.birthDate}
              <Button buttonType={ButtonEnum.OutlinedMainButton}>Voltar</Button>
              <Button type="submit" disabled={isSubmitting}>
                Registrar
              </Button>
            </form>
          )}
        </Formik>
      </Paper>
    </Container >
  )
}

export default RegisterCustomer
