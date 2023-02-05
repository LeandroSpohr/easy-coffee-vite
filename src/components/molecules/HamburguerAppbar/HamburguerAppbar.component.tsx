import React from 'react'
import { AccountIcon } from '../../../assets/icons'
import { useNavigation } from '../../../utils/useNavigation'
import HamburguerOption from '../HamburguerOption'
import { HamburguerAppbar } from './HamburguerAppbar.styles'

const HamburguerAppbarComponent = () => {

  return (
    <HamburguerAppbar>
      <HamburguerOption text='Conta' icon={AccountIcon} action={() => console.log('a')} />
    </HamburguerAppbar>
  )
}

export default HamburguerAppbarComponent