import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import * as UserService from '../../services/Users'
import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Input from '../../components/atoms/Input'
import Image from '../../components/atoms/Image'

import coffeeCup from '../../assets/images/coffeeCup.svg'
import {
  Wrapper,
  FieldContainer,
  FullScreenWrapper,
  ButtonWrapper,
  ThemeButtonWrapper,
  Home,
} from './Home.styles'

import { FullScreenIcon, FullScreenExitIcon, ChangeColorIcon } from '../../assets/icons'

import { useUser } from '../../context/User'
import { colors, sizes } from '../../assets/styles/variables'
import { ButtonEnum } from '../../models/Enums/Button'
import { useNavigation } from '../../utils/useNavigation'
import { useColorSchema } from '../../context/ColorSchema'

const { brown } = colors
const { size200 } = sizes

const HomeComponent = () => {
  const { dispatch } = useUser()
  const { dispatch: colorDispatch } = useColorSchema()
  const [cpf, setCpf] = useState<string>('')
  const { goToProducts } = useNavigation()

  const [toggle, setToggle] = useState<boolean>(false)

  const handleSubmit = (cpf: string) => {
    UserService.getByCpf(cpf)
      .then((response) => {
        dispatch({
          type: 'ADD_USER',
          payload: response,
        })
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

  const changeColorSchema = () => {
    colorDispatch({
      type: 'CHANGE_COLOR_SCHEMA',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === 'cpf' && value.length > 11) {
      return
    }

    setCpf(value)
  }

  return (
    <Home>
      <ThemeButtonWrapper>
        <Button buttonType={ButtonEnum.CircleButton} onClick={handleToggleFullScreen}>
          {toggle ? <FullScreenExitIcon /> : <FullScreenIcon size={sizes.size25} />}
        </Button>
      </ThemeButtonWrapper>
      <FullScreenWrapper>
        <Button buttonType={ButtonEnum.CircleButton} onClick={() => changeColorSchema()}>
          <ChangeColorIcon size={sizes.size25} />
        </Button>
      </FullScreenWrapper>
      <Container fullHeight fullCentered>
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
    </Home>
  )
}

export default HomeComponent
