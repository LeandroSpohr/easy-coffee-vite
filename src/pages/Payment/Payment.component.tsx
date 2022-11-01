import React, { useEffect, useState } from 'react'

import PaymentInterface from '../../models/interfaces/Payment'

import * as PaymentService from '../../services/Payments'

import Typography from '../../components/atoms/Typography'

import {useUser} from '../../context/User'

const Payment = () => {
  
  const [payments, setPayments] = useState<PaymentInterface[]>([])
  const {state} = useUser()

  useEffect(() => {
    PaymentService.getAll(state.user?.id)
      .then(setPayments)
  }, [])

  return (
    <>
      <Typography>Histórico de Pagamentos</Typography>

    </>
  )
}

export default Payment