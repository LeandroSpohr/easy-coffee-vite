import React from 'react'

import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import Paper from '../../components/atoms/Paper'

const Home = () => (
  <Container 
    fullHeight
    fullCentered
  >
    <Paper>
      <h1>Home</h1>
      <Button>
        Login
      </Button>
    </Paper>
  </Container>
)

export default Home