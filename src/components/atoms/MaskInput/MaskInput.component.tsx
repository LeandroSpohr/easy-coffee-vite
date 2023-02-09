import React from 'react'
import MaskInput from './MaskInput.styles'
import { StyledComponentPropsWithRef } from 'styled-components'


const MaskInputComponent = ({ ...rest }: StyledComponentPropsWithRef<typeof MaskInput>) => {
  return <MaskInput {...rest} />
}


export default MaskInputComponent