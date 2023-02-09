import React, { useState } from 'react'

import * as UserService from '../../services/Users'
import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Image from '../../components/atoms/Image'

import coffeeCup from '../../assets/images/coffeeCup.svg'
import { Wrapper, FieldContainer, FullScreenWrapper, ButtonsWrapper, ContentWrapper } from './Home.styles'

import { FullScreenIcon, FullScreenExitIcon } from '../../assets/icons'

import { useUser } from '../../context/User'
import { colors, sizes } from '../../assets/styles/variables'
import { ButtonEnum } from '../../models/Enums/Button'
import { useNavigation } from '../../utils/useNavigation'
import { Formik, useFormik } from 'formik'
import { toast } from 'react-toastify'
import { useValidate } from '../../utils/useValidate'
import MaskInput from '../../components/atoms/MaskInput'

const { brown } = colors
const { size200 } = sizes

const Home = () => {
  const { dispatch } = useUser()
  const { goToProducts, goToRegister } = useNavigation()
  const { validateCPF } = useValidate()

  const [toggle, setToggle] = useState<boolean>(false)

  const handleSubmit = (cpf: string) => {
    UserService.getByCpf(cpf)
      .then((response) => {
        if (response) {
          dispatch({
            type: 'ADD_USER',
            payload: response,
          })
        } else toast.error('User not found')
      })
      .then(() => goToProducts())
  }

  const handleToggleFullScreen = () => {
    const doc = window.document
    const docEl = doc.documentElement

    const requestFullScreen = docEl.requestFullscreen
    const cancelFullScreen = doc.exitFullscreen

    if (!doc.fullscreenElement) {
      requestFullScreen.call(docEl)
      setToggle(true)
    } else {
      cancelFullScreen.call(doc)
      setToggle(false)
    }
  }

  const formik = useFormik({
    initialValues: { cpf: '' },
    onSubmit: () => {
      const cpf = formik.values.cpf
      if (validateCPF(cpf)) {
        handleSubmit(cpf)
      } else if (cpf.length < 1) {
        toast.warn('Insira seu CPF para acessar')
      } else toast.error('CPF inválido')
    }
  })

  return (
    <Container fullHeight fullCentered>
      <ContentWrapper>
        <FullScreenWrapper>
          <Button buttonType={ButtonEnum.CircleButton} onClick={handleToggleFullScreen}>
            {toggle ? <FullScreenExitIcon /> : <FullScreenIcon />}
          </Button>
        </FullScreenWrapper>
        <Paper fullCentered>
          <Wrapper>
            <Image src={coffeeCup} maxHeight={size200} maxWidth={3} />
            <Typography color={brown}>Easy Coffee</Typography>
            <Typography as="h2" color={colors.white}></Typography>
          </Wrapper>
          <Formik
            initialValues={{ cpf: '' }}
            onSubmit={(values) => {
              if (!values.cpf) {
                toast.warn('Preencha todos os campos')
                return
              }
              if (!validateCPF(values.cpf)) {
                toast.error('CPF inválido')
                return
              }
              handleSubmit(values.cpf)
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <FieldContainer>
                  <MaskInput
                    type="tel"
                    name="cpf"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cpf}
                    placeholder={'Informe seu CPF'}

                    mask={'999.999.999-99'}
                  />
                </FieldContainer>
                <ButtonsWrapper>
                  <Button fluid onClick={goToRegister}>
                    Cadastro
                  </Button>
                  <Button fluid type='submit' buttonType={ButtonEnum.OutlinedMainButton}>Entrar</Button>
                </ButtonsWrapper>
              </form>
            )}
          </Formik>
        </Paper >
      </ContentWrapper>
    </Container >
  )
}

export default Home
