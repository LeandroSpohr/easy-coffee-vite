import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import * as UserService from '../../services/Users'
import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Input from '../../components/atoms/Input'
import Image from '../../components/atoms/Image'

import coffeeCup from '../../assets/images/coffeeCup.svg'
import { Wrapper, FieldContainer, FullScreenWrapper, ButtonWrapper } from './Home.styles'

import { FullScreenIcon, FullScreenExitIcon } from '../../assets/icons'

import { useUser } from '../../context/User'
import { colors, sizes } from '../../assets/styles/variables'

const { brown } = colors
const { size200 } = sizes

const Home = () => {
  const { dispatch } = useUser()
  const [cpf, setCpf] = useState<string>('')
  const navigate = useNavigate()

  const [toggle, setToggle] = useState<boolean>(false)

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

  const handleToggleFullScreen = () => {
    const doc = window.document
    const docEl = doc.documentElement

    const requestFullScreen =
      docEl.requestFullscreen
    const cancelFullScreen = doc.exitFullscreen

    if (!doc.fullscreenElement) {
      requestFullScreen.call(docEl)
      setToggle(true)
    } else {
      cancelFullScreen.call(doc)
      setToggle(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === 'cpf' && value.length > 11) {
      return
    }

    setCpf(value)
  }

  return (
    <Container fullHeight fullCentered>
      <FullScreenWrapper>
        <Button onClick={handleToggleFullScreen} circle>
          {toggle ? <FullScreenExitIcon /> : <FullScreenIcon />}
        </Button>
      </FullScreenWrapper>
      <Paper fullCentered>
        <form>
          <Wrapper>
            <Image src={coffeeCup} maxHeight={size200} maxWidth={3} />
            <Typography color={brown}>Easy Coffee</Typography>
          </Wrapper>
          <FieldContainer>
            <Input
              type="number"
              value={cpf}
              name="cpf"
              onChange={(e) => handleChange(e)}
              placeholder="Informe seu CPF"
            />
          </FieldContainer>
          <Container displayBlock>
            <ButtonWrapper>
              <div>
                <Button type="submit" onClick={(e) => {
                  e.preventDefault()
                  handleSubmit(cpf)
                }}>
                  Entrar
                </Button>
              </div>
              <div>
                <Link to="/cadastro">
                  <Typography as='h4' color={brown}>Registre-se</Typography>
                </Link>
              </div>
            </ButtonWrapper>
          </Container>
        </form>
      </Paper>
    </Container>
  )
}

export default Home
