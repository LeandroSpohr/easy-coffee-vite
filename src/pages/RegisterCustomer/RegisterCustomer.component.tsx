import React from 'react'
import { toast } from 'react-toastify'

import * as UserService from '../../services/Users'
import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Image from '../../components/atoms/Image'

import coffeeCup from '../../assets/images/coffeeCup.svg'
import { Wrapper, FieldContainer, ContentWrapper } from './RegisterCustomer.styles'

import { UserInputInterface } from '../../models/interfaces/User'

import { useUser } from '../../context/User'
import { colors, sizes } from '../../assets/styles/variables'
import { useNavigation } from '../../utils/useNavigation'
import { useValidate } from '../../utils/useValidate'
import { useRemove } from '../../utils/useRemove'
import CPFInput from '../../components/atoms/CPFInput'
import { Formik } from 'formik'
import { ButtonEnum } from '../../models/Enums/Button'
import FormField from '../../components/molecules/FormField'
import { ButtonsWrapper } from '../Home/Home.styles'

const { brown } = colors
const { size200 } = sizes

const RegisterCustomer = () => {
  const { dispatch } = useUser()
  const { goBack, goToProducts } = useNavigation()
  const { validateCPF } = useValidate()
  const { removeCPFMask } = useRemove()

  const handleSubmit = (newUser: UserInputInterface) => {
    newUser.cpf = removeCPFMask(newUser.cpf)
    newUser.birthDate = new Date(newUser.birthDate)

    UserService.save(newUser).then((response) => {
      dispatch({
        type: 'ADD_USER',
        payload: response,
      })
    }).then(() => goToProducts())
  }

  return (
    <Container fullHeight fullCentered>
      <ContentWrapper>

        <Paper fullCentered>
          <Wrapper>
            <Image src={coffeeCup} maxHeight={size200} maxWidth={3} />
            <Typography color={brown}>Easy Coffee</Typography>
          </Wrapper>
          <Formik
            initialValues={{ cpf: '', name: '', birthDate: '' }}
            onSubmit={(values) => {
              if (!values.cpf || !values.name || !values.birthDate) {
                toast.warn('Preencha todos os campos')
                return
              }
              if (!validateCPF(values.cpf)) {
                toast.error('CPF inválido')
                return
              }
              handleSubmit({ ...values })
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
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
                <ButtonsWrapper>
                  <Button type='button' fluid buttonType={ButtonEnum.OutlinedMainButton} onClick={goBack}>Voltar</Button>
                  <Button type="submit" fluid >
                    Registrar
                  </Button>
                </ButtonsWrapper>
              </form>
            )}
          </Formik>
        </Paper>
      </ContentWrapper>
    </Container >
  )
}

export default RegisterCustomer
