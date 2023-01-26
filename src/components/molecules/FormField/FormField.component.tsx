import React from 'react'
import Typography from '../../atoms/Typography'

import Input from '../../atoms/Input'
import { InputComponentInterface } from '../../atoms/Input/Input.component'

interface FormFieldComponentInterface extends InputComponentInterface {
  label: string
  otherFormField?: JSX.Element
}

const FormFieldComponent = ({ label, otherFormField, ...rest }: FormFieldComponentInterface) => {
  return (
    <>
      <Typography as="h3">{label}</Typography>
      {otherFormField ? otherFormField : <Input {...rest} />}
    </>
  )
}

export default FormFieldComponent
