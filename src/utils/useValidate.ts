import { toast } from 'react-toastify'

export const useValidate = () => {
  const validateCPF = (cpf: string) => {
    if (cpf.length != 11) {
      toast.error(`${'Formato de CPF inválido'}`)
      return false
    }
    return true
  }

  return { validateCPF }
}
