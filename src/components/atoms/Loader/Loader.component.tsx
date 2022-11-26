import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import coffeeLoveJson from '../../../assets/lottie/coffee-love.json'

import { sizes } from '../../../assets/styles/variables'

const {size300} = sizes

const Loader = () => (
  <Player
    autoplay
    loop
    src={coffeeLoveJson}
    style={{ height: size300, width: size300 }}
  />
)

export default Loader