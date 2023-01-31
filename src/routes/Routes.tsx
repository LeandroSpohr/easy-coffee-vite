import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import Home from '../pages/Home'
import QueryProducts from '../pages/QueryProducts'
import Cart from '../pages/Cart'
import MyAccount from '../pages/MyAccount'
import RegisterCustomer from '../pages/RegisterCustomer'

import MainTemplate from '../components/templates/MainTemplate'
import RegisterProduct from '../pages/RegisterProduct'
import { useUser } from '../context/User'

interface PrivateRouteInterface {
  children: JSX.Element
}

const AppRoutes = () => {
  const PrivateRoute = ({ children }: PrivateRouteInterface): JSX.Element => {
    const { state } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
      if (!state.hasUser) {
        navigate('/')
      }
    }, [state.hasUser])

    return <MainTemplate>{children}</MainTemplate>
  }

  return (
    <BrowserRouter basename="/easy-coffee-vite/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cadastro" element={<RegisterCustomer />} />
        <Route
          path="produtos"
          element={
            <PrivateRoute>
              <QueryProducts />
            </PrivateRoute>
          }
        />
        <Route
          path="carrinho"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="minha-conta"
          element={
            <PrivateRoute>
              <MyAccount />
            </PrivateRoute>
          }
        />
        <Route
          path="registrar-produto"
          element={
            <PrivateRoute>
              <RegisterProduct />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
