import React from 'react'
import Typography from '../../atoms/Typography'

import Input from '../../atoms/Input'
import { InputComponentInterface } from '../../atoms/Input/Input.component'
import { FormField } from './FormField.styles'

interface FormFieldComponentInterface extends InputComponentInterface {
  label?: string
  otherFormField?: JSX.Element
}

const FormFieldComponent = ({ label, otherFormField, ...rest }: FormFieldComponentInterface) => {
  return (
    <FormField>
      <Typography as="h3">{label}</Typography>
      {otherFormField ? otherFormField : <Input autoComplete='off' {...rest} />}
    </FormField>
  )
}

export default FormFieldComponent
