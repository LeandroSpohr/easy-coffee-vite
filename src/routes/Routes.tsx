import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Product from '../pages/Product'
import QueryProducts from '../pages/QueryProducts'

import { useUser } from '../context/User'
import MainTemplate from '../components/templates/MainTemplate'

interface PrivateRouteInterface {
  children: JSX.Element
}

const AppRoutes = () => {
  const {state} = useUser()
  const PrivateRoute = (
    { children }: PrivateRouteInterface,
  ): JSX.Element => (state.hasUser ? (
    <MainTemplate>
      { children }
    </MainTemplate>
  ) : (
    <Navigate to={'/'} replace/>
  ))

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produtos" element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }/>
        <Route path="consultar-produtos" element={
          <PrivateRoute>
            <QueryProducts />
          </PrivateRoute>
        }/>
        <Route path="*" element={<Navigate to={'/'} replace/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
