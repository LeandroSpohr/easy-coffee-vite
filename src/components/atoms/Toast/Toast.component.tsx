import React from 'react'
import { toast , ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toast = () => {

  toast.success('Compra evetuada com sucesso')

  return (
    <>
      <ToastContainer/>
    </>
  )
}

export default Toast