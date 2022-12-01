import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as UserService from '../../services/Users'

import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Input from '../../components/atoms/Input'
import Image from '../../components/atoms/Image'

import coffeeCup from '../../assets/images/coffeeCup.svg'
import { Wrapper, FieldContainer } from './Home.styles'

import { useUser } from '../../context/User'
import { colors, sizes } from '../../assets/styles/variables'

const { brown } = colors
const { size200 } = sizes

const Home = () => {
  const { dispatch } = useUser()
  const [cpf, setCpf] = useState<string>('')
  const navigate = useNavigate()

  const handleSubmit = (cpf: string) => {
    UserService.getByCpf(cpf)
      .then((response) => {
        dispatch({
          type: 'ADD_USER',
          payload: response,
        })
      })
      .then(() => navigate('/produtos'))
  }

  return (
    <Container fullHeight fullCentered>
      <Paper fullCentered>
        <Wrapper>
          <Image src={coffeeCup} maxHeight={size200} maxWidth={3} />
          <Typography color={brown}>Easy Coffee</Typography>
        </Wrapper>
        <form>
          <FieldContainer>
            <Input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="Informe seu CPF"
            />
          </FieldContainer>
          <Button type="submit" onClick={(event) => {
            event.preventDefault()
            handleSubmit(cpf)
          }}>
            Entrar
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default Home
