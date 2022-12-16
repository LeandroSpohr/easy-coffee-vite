import React from 'react'
import { Link } from 'react-router-dom'

import AppBar, { InfoWrapper, ActionsWrapper, IcoWrapper } from './AppBar.style'
import { CartIcon, ExitIcon, LeftArrowIcon, AccountIcon } from '../../../assets/icons'
import { sizes } from '../../../assets/styles/variables'

import Typography from '../../atoms/Typography'
import Badge from '../../atoms/Badge'

import { useUser } from '../../../context/User'

import { useFormats } from '../../../utils/useFormats'
import LogoutConfirm from '../LogoutConfirm'
import { useNavigation } from '../../../utils/useNavigation'

const AppBarComponent = () => {
  const { state } = useUser()
  const { goBack } = useNavigation()
  const { getFirstName } = useFormats()

  const logout = () =>
    document.getElementById('displayLogoutConfirm')?.setAttribute('style', 'display: fixed')

  const getBadgeNumber = () => {
    if (state.cart.length) {
      return state.cart.length
    }
  }

  return (
    <>
      <LogoutConfirm />
      <AppBar>
        <InfoWrapper>
          <span onClick={() => goBack()}>
            <LeftArrowIcon size={sizes.size28} />
          </span>
          <Typography>Olá {getFirstName(state.user?.name)}</Typography>
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
              <Badge className="badge">{getBadgeNumber()}</Badge>
            </IcoWrapper>
          </Link>
          <IcoWrapper>
            <ExitIcon size={sizes.size30} onClick={() => logout()} />
          </IcoWrapper>
        </ActionsWrapper>
      </AppBar>
    </>
  )
}
export default AppBarComponent
