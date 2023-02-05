import { useCallback } from 'react'

export const useFormats = () => {
  const formatCurrency = (value?: number) => !value ? 'R$ 0,00' : value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const getFirstName = useCallback(
    (fullName?: string) => (!fullName ? '' : fullName.split(' ')[0]),
    [],
  )

  const formatDateDDMMYYYY = (data: Date) => `${data.toLocaleDateString('pt-BR')}`

  const formatDateYYYYMMDD = (data: Date) =>
    `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`

  const capitalizeFirstLetter = (content: string) => {
    return content.charAt(0).toUpperCase() + content.slice(1)
  }

  return {
    capitalizeFirstLetter,
    formatCurrency,
    getFirstName,
    formatDateDDMMYYYY,
    formatDateYYYYMMDD,
  }
}
