import React, { useEffect, useState } from 'react'

import PaymentInterface from '../../models/interfaces/Payment'

import * as PaymentService from '../../services/Payments'

import { useFormats } from '../../utils/useFormats'

import Table from '../../components/atoms/Table'

import { useUser } from '../../context/User'
import List from '../../components/templates/ListTemplate'

const Payment = () => {
  const { formatDateDDMMYYYY, formatCurrency } = useFormats()
  const [payments, setPayments] = useState<PaymentInterface[]>([])
  const { state } = useUser()

  useEffect(() => {
    PaymentService.getAll(state.user?.id).then(setPayments)
  }, [])

  const data = payments.map((item) => [
    formatDateDDMMYYYY(new Date(item.dateHour)),
    formatCurrency(item.totalValue),
  ])

  const columns = ['Data', 'Gastos']

  return (
    <>
      <List title="Histórico de Pagamentos">
        <Table data={data} columns={columns} />
      </List>
    </>
  )
}

export default Payment
