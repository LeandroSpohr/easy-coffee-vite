import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import AppBar, {InfoWrapper, ActionsWrapper} from './AppBar.style'
import {CartIcon, ExitIcon, LeftArrowIcon} from '../../../assets/icons'
import { sizes } from '../../../assets/styles/variables'

import Typography from '../../atoms/Typography'

import { useUser } from '../../../context/User'

import { useFormats } from '../../../utils/useFormats'

const AppBarComponent = () => {
  const {state, dispatch} = useUser()
  const navigate = useNavigate()
  const { getFirstName } = useFormats()

  const goBack = () => {
    navigate(-1)
  }

  const logout = () => {
    dispatch({
      type: 'CLEAR_USER'
    })
    navigate('/')
  }

  return (
    <AppBar>
      <InfoWrapper>
        <span onClick={() => goBack()} >
          <LeftArrowIcon size={sizes.size28} />
        </span>
        <Typography>
          Olá {getFirstName(state.user?.name)}
        </Typography>
      </InfoWrapper>
      <ActionsWrapper>
        <Link to="/carrinho">
          <CartIcon size={sizes.size28} />
        </Link>
        <ExitIcon size={sizes.size28} onClick={() => logout()} />
      </ActionsWrapper>
    </AppBar>
  )
}
export default AppBarComponent
