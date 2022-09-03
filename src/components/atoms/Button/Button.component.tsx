import React from 'react'
// import Button, { ButtonProps } from 'react-bootstrap/Button'
import Button, { ButtonProps } from '@mui/material/Button'

interface ButtonInterface extends ButtonProps {
  colorTest?: string
}

const ButtonComponent = (props: ButtonInterface) => (
  <Button { ...props }>Primary</Button>
)

export default ButtonComponent