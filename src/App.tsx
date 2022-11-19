import React from 'react'

import { UserProvider } from './context/User'

import Toast from './components/atoms/Toast'

import AppRoutes from './routes/Routes'

const App = () => (
  <UserProvider>
    <Toast />
    <AppRoutes />
  </UserProvider>
)

export default App
