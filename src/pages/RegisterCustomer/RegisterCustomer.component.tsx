import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-grid-system'
import { toast } from 'react-toastify'

import * as UserService from '../../services/Users'
import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Input from '../../components/atoms/Input'
import Image from '../../components/atoms/Image'

import coffeeCup from '../../assets/images/coffeeCup.svg'
import { Wrapper, FieldContainer, InputWrapper, ButtonWrapper } from './RegisterCustomer.styles'

import { UserInputInterface } from '../../models/interfaces/User'

import { useUser } from '../../context/User'
import { colors, sizes } from '../../assets/styles/variables'
import { useNavigation } from '../../utils/useNavigation'

const { brown } = colors
const { size200 } = sizes

const RegisterCustomer = () => {
  const { dispatch } = useUser()
  const { goToProducts } = useNavigation()

  const initialFormValues: UserInputInterface = {
    cpf: '',
    name: '',
    birthDate: '',
  }

  const [formValues, setFormValues] = useState<UserInputInterface>(initialFormValues)

  const handleSubmit = () => {
    if (!formValues.cpf || !formValues.name || !formValues.birthDate) {
      toast.warn('Preencha todos os campos')
      return
    }

    const newValues = { ...formValues }

    newValues.birthDate = new Date(formValues.birthDate)

    UserService.save(newValues).then((response) => {
      dispatch({
        type: 'ADD_USER',
        payload: response,
      })
      goToProducts()
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === 'cpf' && value.length > 11) {
      return
    }

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  return (
    <Container fullHeight fullCentered>
      <Paper fullCentered>
        <form onSubmit={(e) => e.preventDefault}>
          <Wrapper>
            <Image src={coffeeCup} maxHeight={size200} maxWidth={3} />
            <Typography color={brown}>Easy Coffee</Typography>
          </Wrapper>
          <FieldContainer>
            <Typography color={brown}>Registre-se</Typography>
            <Row>
              <Col>
                <InputWrapper>
                  <Typography as="h3" color={brown}>
                    CPF
                  </Typography>
                  <Input
                    type="number"
                    name="cpf"
                    value={formValues.cpf}
                    onChange={(e) => handleChange(e)}
                    placeholder="Informe seu CPF"
                    autoComplete="off"
                  />
                </InputWrapper>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputWrapper>
                  <Typography as="h3" color={brown}>
                    Nome
                  </Typography>
                  <Input
                    type="text"
                    name="name"
                    maxLength={100}
                    value={formValues.name}
                    onChange={(e) => handleChange(e)}
                    placeholder="Informe seu nome"
                    autoComplete="off"
                  />
                </InputWrapper>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputWrapper>
                  <Typography as="h3" color={brown}>
                    Data de Nascimento
                  </Typography>
                  <Input
                    type="date"
                    name="birthDate"
                    value={formValues.birthDate as string}
                    onChange={(e) => handleChange(e)}
                    placeholder="Informe sua data de nascimento"
                  />
                </InputWrapper>
              </Col>
            </Row>
          </FieldContainer>
          <Container displayBlock>
            <ButtonWrapper>
              <div>
                <Button
                  type="submit"
                  onClick={(e) => {
                    handleSubmit()
                  }}
                >
                  Enviar
                </Button>
              </div>
              <div>
                <Link to="/">
                  <Typography as="h4" color={brown}>
                    Cancelar
                  </Typography>
                </Link>
              </div>
            </ButtonWrapper>
          </Container>
        </form>
      </Paper>
    </Container>
  )
}

export default RegisterCustomer
