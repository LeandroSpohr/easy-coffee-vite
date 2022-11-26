import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import coffeeLoveJson from '../../../assets/lottie/coffee-love.json'

const Loader = () => (
  <Player
    autoplay
    loop
    src={coffeeLoveJson}
    style={{ height: '300px', width: '300px' }}
  />
)

export default Loader