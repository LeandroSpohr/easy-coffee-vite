import React from 'react'

import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Input from '../../components/atoms/Input'

const Home = () => (
  <Container 
    fullHeight
    fullCentered
  >
    <Paper>
      <Typography>Bem Vindo!</Typography>
      <Input 
        type='text'
      />
      <br/>
      <Button>
        Entrar
      </Button>
    </Paper>
  </Container>
)

export default Home