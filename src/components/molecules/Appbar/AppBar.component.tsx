import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from './AppBar.style'
import Typography from '../../atoms/Typography'
import Button from '../../atoms/Button'
import Cart from '../../../assets/images/cart.svg'
import { useUser } from '../../../context/User'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as UserService from '../../../services/Users'
const AppBarComponent = () => {
  const { dispatch } = useUser()
  const  [ cpf ] = useState<string>('')
  const navigate = useNavigate()
  const logout = (cpf: string) => {
    UserService.getByCpf(cpf)
      .then((response) => {
        dispatch({
          type: 'CLEAR_USER',
        })
      })
      .then(() => navigate('/produtos'))
  }

  return (
    <AppBar>
      <Link to="/carrinho">
        <img src={Cart} />
      </Link>
      <Typography>EASY-COFFEE</Typography>
      <Link to="/">
        <Button onClick={() => logout(cpf)}>LogOff</Button>
      </Link>
    </AppBar>
  )
}
export default AppBarComponent
