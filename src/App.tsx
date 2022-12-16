import React from 'react'

import { UserProvider } from './context/User'
import { ColorSchemaProvider } from './context/ColorSchema'

import Toast from './components/atoms/Toast'
import PageLoader from './components/molecules/PageLoader'

import AppRoutes from './routes/Routes'

const App = () => {
  return (
    <ColorSchemaProvider>
      <UserProvider>
        <Toast />
        <PageLoader />
        <AppRoutes />
      </UserProvider>
    </ColorSchemaProvider>
  )
}

export default App
