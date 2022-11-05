import React, { useEffect, useState } from 'react'

import PaymentInterface from '../../models/interfaces/Payment'

import * as PaymentService from '../../services/Payments'

import { useFormats } from '../../utils/useFormats'

import Typography from '../../components/atoms/Typography'
import Table from '../../components/atoms/Table'

import { useUser } from '../../context/User'

const Payment = () => {
  const { formatDateDDMMYYYY } = useFormats()
  const [payments, setPayments] = useState<PaymentInterface[]>([])
  const { state } = useUser()

  useEffect(() => {
    PaymentService.getAll(state.user?.id)
      .then(setPayments)
  }, [])

  const dados = payments.map((item) => (
    {...item, dateHour: formatDateDDMMYYYY(item.dateHour as Date)}
  ))

  const colunas = [
    {field: 'totalValue', header: 'Gastos'},
    {field: 'dateHour', header: 'Data/Hora'}
  ]

  return (
    <>
      <Typography>Histórico de Pagamentos</Typography>
      
      <Table 
        data={dados} 
        columns={colunas}
      />
      
    </>
  )
}

export default Payment