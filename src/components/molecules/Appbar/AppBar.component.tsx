import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import AppBar, {InfoWrapper, ActionsWrapper, IcoWrapper} from './AppBar.style'
import {CartIcon, ExitIcon, LeftArrowIcon, AccountIcon} from '../../../assets/icons'
import { sizes } from '../../../assets/styles/variables'

import Typography from '../../atoms/Typography'
import Badge from '../../atoms/Badge'

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

  const getBadgeNumber = () => {
    if (state.cart.length) {
      return state.cart.length
    }
  }

  return (
    <AppBar>
      <InfoWrapper>
        <span onClick={() => goBack()} >
          <LeftArrowIcon size={sizes.size32} />
        </span>
        <Typography>
          Olá {getFirstName(state.user?.name)}
        </Typography>
      </InfoWrapper>
      <ActionsWrapper>
        <Link to="/minha-conta">
          <IcoWrapper>
            <AccountIcon size={sizes.size30} />
          </IcoWrapper>
        </Link>
        <Link to="/carrinho">
          <IcoWrapper>
            <CartIcon size={sizes.size30} />
            <Badge className="badge">
              {getBadgeNumber()}
            </Badge>
          </IcoWrapper>
        </Link>
        <IcoWrapper>
          <ExitIcon size={sizes.size30} onClick={() => logout()} />
        </IcoWrapper>
      </ActionsWrapper>
    </AppBar>
  )
}
export default AppBarComponent
