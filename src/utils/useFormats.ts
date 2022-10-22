import { useCallback } from 'react'

export const useFormats = () => {
  const formatCurrency = useCallback((value?: number) => (
    !value ? 'R$ 0,00' : value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  ), [])

  const getFisrtName = useCallback((fullName?: string) => (
    !fullName ? '' : fullName.split(' ')[0]
  ), [])

  return {
    formatCurrency,
    getFisrtName,
  }
}
