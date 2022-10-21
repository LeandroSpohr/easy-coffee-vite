import React from 'react'
import Button from '../../components/atoms/Button'
import Container from '../../components/atoms/Container'
import Input from '../../components/atoms/Input'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'

const Home = () => (
  <Container fullHeight fullCentered>    
    <Paper>
      <Typography>Bem Vindo!</Typography>
      <p> Aproveite o seu cafézin </p>
      
      <Input
        type='text'
      />
      <Button>
        Entrar
      </Button> 
 

    </Paper>
  </Container>
)

export default Home