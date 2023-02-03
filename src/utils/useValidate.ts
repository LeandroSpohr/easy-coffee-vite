export const useValidate = () => {
  const validateCPF = (cpf: string) => {
    if (!cpf) return false

    const cpfClean = cpf.replace(/[^\d]+/g, '')

    if (cpfClean.length !== 11) return false

    if (cpfClean === '00000000000') return false

    let sum = 0
    let rest

    for (let i = 1; i <= 9; i += 1) {
      sum += parseInt(cpfClean.substring(i - 1, i), 10) * (11 - i)
    }

    rest = (sum * 10) % 11

    if ((rest === 10) || (rest === 11)) {
      rest = 0
    }

    if (rest !== parseInt(cpfClean.substring(9, 10), 10)) {
      return false
    }

    sum = 0

    for (let i = 1; i <= 10; i += 1) {
      sum += parseInt(cpfClean.substring(i - 1, i), 10) * (12 - i)
    }

    rest = (sum * 10) % 11

    if ((rest === 10) || (rest === 11)) {
      rest = 0
    }

    if (rest !== parseInt(cpfClean.substring(10, 11), 10)) {
      return false
    }

    return true
  }

  return { validateCPF }
}
