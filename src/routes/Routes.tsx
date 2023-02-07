import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import QueryProducts from '../pages/QueryProducts'
import Cart from '../pages/Cart'
import MyAccount from '../pages/MyAccount'
import RegisterCustomer from '../pages/RegisterCustomer'

import RegisterProduct from '../pages/RegisterProduct'
import IdleTimer from '../components/atoms/IdleTimer'
import PurchaseHistoric from '../pages/PurchaseHistoric'

import { PrivateRoute } from './PrivateRoute'

const AppRoutes = () => (
  <BrowserRouter basename="/easy-coffee-vite/">
    <IdleTimer leftTime={120000}>
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
          path="historico-de-compras"
          element={
            <PrivateRoute>
              <PurchaseHistoric />
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
    </IdleTimer>
  </BrowserRouter >
)

export default AppRoutes
