import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { MainTemplate } from '../components/templates/MainTemplate'

import { useUser } from '../context/User'

interface PrivateRouteInterface {
  children: JSX.Element
}

export const PrivateRoute = ({ children }: PrivateRouteInterface): JSX.Element => {
  const { state } = useUser()
  const navigate = useNavigate()
  useEffect(() => {
    if (!state.hasUser) {
      navigate('/')
    }
  }, [state.hasUser])

  return <MainTemplate>{children}</MainTemplate>
}

export default PrivateRoute