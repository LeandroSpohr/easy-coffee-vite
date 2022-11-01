import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import {UserProvider} from './context/User'

import Home from './pages/Home'
import Product from './pages/Product'
import Payment from './pages/Payment'

const App = () =>  (
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produtos" element={<Product />} />
        <Route path="pagamentos" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  </UserProvider>
)

export default App
