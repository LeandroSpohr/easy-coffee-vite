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
import { colors } from '../../assets/styles/variables'

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
          <Image src={coffeeCup} maxHeight='200px' maxWidth={3} />
          <Typography color={colors.brown}>Easy Coffee</Typography>
        </Wrapper>
        <FieldContainer>
          <Input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Informe seu CPF"
          />
        </FieldContainer>
        <Button type="button" onClick={() => handleSubmit(cpf)}>
          Entrar
        </Button>
      </Paper>
    </Container>
  )
}

export default Home
