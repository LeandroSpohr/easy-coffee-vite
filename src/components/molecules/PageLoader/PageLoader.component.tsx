import React, {useState} from 'react'
import {AxiosError} from 'axios'

import api from '../../../config/api'

import Loader from '../../atoms/Loader'

import { Container } from './PageLoader.style'

const PageLoader = () => {
  const [showLoader, setShowLoader] = useState<boolean>(false)

  api.interceptors.request.use((config) => {
    setShowLoader(true)

    return config
  })

  api.interceptors.response.use((config) => {
    setShowLoader(false)

    return config
  }, (error: AxiosError) => {
    setShowLoader(false)
  
    throw error
  })

  return (
    <>
      {showLoader && (
        <Container>
          <Loader />
        </Container>
      )}
    </>
  )}

export default PageLoader