import { useCallback } from 'react'

export const useFormats = () => {
  const formatCurrency = useCallback((value?: number) => (
    !value ? 'R$ 0,00' : value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  ), [])

  const getFirstName = useCallback((fullName?: string) => (
    !fullName ? '' : fullName.split(' ')[0]
  ), [])

  const formatDateDDMMYYYY = (data: Date) => (
    `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
  )

  return {
    formatCurrency,
    getFirstName,
    formatDateDDMMYYYY
  }
}
