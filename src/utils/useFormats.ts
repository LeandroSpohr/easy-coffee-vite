import { useCallback } from 'react'

export const useFormats = () => {

  const capitalizeFirstLetter = (content: string) => content.charAt(0).toUpperCase() + content.slice(1)

  const formatCurrency = useCallback(
    (value?: number) =>
      !value ? 'R$ 0,00' : value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    [],
  )

  const getFirstName = useCallback(
    (fullName?: string) => (!fullName ? '' : fullName.split(' ')[0]),
    [],
  )

  const setCpfMask = (cpf: string) =>
    cpf
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')

  const removeCpfMask = (cpf: string) => cpf.replace(/\D/g, '')

  const formatDateDDMMYYYY = (data: Date) => `${data.toLocaleDateString('pt-BR')}`

  const formatDateYYYYMMDD = (data: Date) =>
    `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`

  return {
    capitalizeFirstLetter,
    formatCurrency,
    getFirstName,
    setCpfMask,
    removeCpfMask,
    formatDateDDMMYYYY,
    formatDateYYYYMMDD,
  }
}
