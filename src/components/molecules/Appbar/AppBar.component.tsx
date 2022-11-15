import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import AppBar from './AppBar.style'
import Typography from '../../atoms/Typography'
import Button from '../../atoms/Button'
import Cart from '../../../assets/images/cart.svg'
import { clearUser } from '../../../context/User/actions'
import { useNavigate } from 'react-router-dom'
const AppBarComponent = () => {
  const navigate = useNavigate()

  const logout = () => {
    clearUser()
    navigate('/')
  }
  return (
    <AppBar>
      <Link to="/carrinho">
        <img src={Cart} />
      </Link>
      <Typography>EASY-COFFEE</Typography>
      <Link to="/">
        <Button onClick={() => logout()}>LogOff</Button>
      </Link>
    </AppBar>
  )
}
export default AppBarComponent
