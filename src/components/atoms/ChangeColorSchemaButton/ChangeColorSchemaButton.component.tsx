import React from 'react'
import { useColorSchema } from '../../../context/ColorSchema'
import Button from '../Button'

const ChangeColorSchemaButton = () => {
  const { dispatch } = useColorSchema()

  const changeColorSchema = () => {
    dispatch({
      type: 'CHANGE_COLOR_SCHEMA',
    })
  }

  return <Button onClick={() => changeColorSchema()}>T</Button>
}

export default ChangeColorSchemaButton
