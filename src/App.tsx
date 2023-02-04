import React from 'react'

import { UserProvider } from './context/User'
import { ModalProvider } from './context/Modal'

import { Toast } from './components/atoms/Toast'
import { PageLoader } from './components/molecules/PageLoader'

import AppRoutes from './routes/Routes'

const App = () => (
  <UserProvider>
    <ModalProvider>
      <Toast />
      <PageLoader />
      <AppRoutes />
    </ModalProvider>
  </UserProvider>
)

export default App
