import {createGlobalStyle} from 'styled-components'
import coffeBean from '../images/coffee_bean.svg'

import { colors } from '../variables'

const { brown } = colors

const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${brown};
    background-image: url(${coffeBean});
    background-size: 600px;
    height: 100vh;
  }
`

export default GlobalStyle