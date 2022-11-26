import React from 'react'

import { UserProvider } from './context/User'

import Toast from './components/atoms/Toast'
import PageLoader from './components/molecules/PageLoader'

import AppRoutes from './routes/Routes'

const App = () => (
  <UserProvider>
    <Toast />
    <PageLoader />
    <AppRoutes />
  </UserProvider>
)

export default App
