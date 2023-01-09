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
import { toast } from 'react-toastify'
import { useFormats } from '../../utils/useFormats'

const { brown } = colors
const { size200 } = sizes

const Home = () => {
  const { dispatch } = useUser()
  const [cpf, setCpf] = useState<string>('')
  const navigate = useNavigate()

  const { setCpfMask, removeCpfMask } = useFormats()

  const [toggle, setToggle] = useState<boolean>(false)

  const handleSubmit = (cpf: string) => {
    cpf = removeCpfMask(cpf)

    if (cpf.length != 11) {
      triggerErrorToast('Error: Formato de CPF inválido!')
      return
    }

    UserService.getByCpf(cpf)
      .then((response) => {
        if (response) {
          dispatch({
            type: 'ADD_USER',
            payload: response,
          })
        }
      })
      .then(() => navigate('/produtos'))
      .catch((error) => triggerErrorToast(error))
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === 'cpf' && value.length > 14) {
      return
    }

    setCpf(value)
  }

  const triggerErrorToast = (error: string) => {
    toast.error(`${error}`, { theme: 'colored', position: 'top-center' })
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
              type="text"
              value={setCpfMask(cpf)}
              name="cpf"
              onChange={(e) => handleChange(e)}
              placeholder="Informe seu CPF"
              autoComplete="off"
            />
          </FieldContainer>
          <Container displayBlock>
            <ButtonWrapper>
              <div>
                <Button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault()
                    handleSubmit(cpf)
                  }}
                >
                  Entrar
                </Button>
              </div>
              <div>
                <Link to="/cadastro">
                  <Typography as="h4" color={brown}>
                    Registre-se
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

export default Home
