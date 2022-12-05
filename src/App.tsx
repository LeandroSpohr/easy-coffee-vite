import React from 'react'

import { UserProvider } from './context/User'

import Toast from './components/atoms/Toast'
import PageLoader from './components/molecules/PageLoader'

import AppRoutes from './routes/Routes'
import { ThemeProvider } from './context/Theme'

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Toast />
        <PageLoader />
        <AppRoutes />
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
