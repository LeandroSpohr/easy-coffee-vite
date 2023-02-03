import React from 'react'
import CPFInput from './CPFInput.styles'

const CPFInputComponent = (props: any) => (
  <CPFInput
    mask={'999.999.999-99'}
    id="cpf"
    name="cpf"
    type="tel"
    maskChar={null}
    placeholder='Informe seu CPF'
    autoComplete='off'
    {...props}
  />
)

export default CPFInputComponent