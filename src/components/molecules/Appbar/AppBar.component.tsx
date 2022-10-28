import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from './AppBar.style'
import Typography from '../../atoms/Typography'
import Button from '../../atoms/Button'
import Cart from '../../../assets/images/cart.svg'
import { clearUser } from '../../../context/User/actions'


const AppBarComponent = () => {
  
  return (
    <AppBar>
      <Link to="/carrinho">
        <img src={Cart} />
      </Link>
      <Typography>EASY-COFFEE</Typography>
      <Button onClick={() => clearUser() }>LogOff</Button>
    </AppBar>
  )
}
export default AppBarComponent
