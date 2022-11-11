import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as UserService from '../../services/Users'

import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Input from '../../components/atoms/Input'
import { useUser } from '../../context/User'
import FilterBox from '../../components/molecules/FilterBox'

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
    <Container>
      <FilterBox description={'Buscar'} handleSubmit={() => console.log('hello')}>
        <Typography>Filtros</Typography>
      </FilterBox>
    </Container>
  )
}

export default Home
