import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import {UserProvider} from './context/User'

import Home from './pages/Home'

const App = () =>  (
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </UserProvider>
)

export default App
