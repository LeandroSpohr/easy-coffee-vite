import React from 'react'

import { UserProvider } from './context/User'
import { ColorSchemaProvider } from './context/ColorSchema'
import { ModalProvider } from './context/Modal'

import Toast from './components/atoms/Toast'
import PageLoader from './components/molecules/PageLoader'

import AppRoutes from './routes/Routes'

const App = () => {
  return (
    <ColorSchemaProvider>
      <UserProvider>
        <ModalProvider>
          <Toast />
          <PageLoader />
          <AppRoutes />
        </ModalProvider>
      </UserProvider>
    </ColorSchemaProvider>
  )
}

export default App
