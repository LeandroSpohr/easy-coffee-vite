import React from 'react'
import { useTheme } from '../../../context/Theme'
import Button from '../Button'

const ChangeThemeButtonComponent = () => {
  const { dispatch } = useTheme()

  const reloadPage = async () => {
    dispatch({
      type: 'CHANGE_THEME',
    })

    setInterval(() => {
      location.reload()
    }, 500)
  }

  return (
    <Button style={{ position: 'absolute' }} onClick={() => reloadPage()}>
      A
    </Button>
  )
}

export default ChangeThemeButtonComponent
