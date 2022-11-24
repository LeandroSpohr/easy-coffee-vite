import styled, {css} from 'styled-components'
import { sizes, colors, fontSizes, fontWeights } from '../../../assets/styles/variables'

interface ButtonInterface {
  circle?: boolean
}

const Button = styled.button<ButtonInterface>`
  border: none;
  padding: ${sizes.size14} ${sizes.size20};
  min-height: ${sizes.size48};
  background: ${colors.brown};
  border-radius: ${sizes.size15};
  cursor: pointer;
  
  :active{
      transition: 0.01s;
      transform: scale(0.90);
      box-shadow: inset 3px 2px 22px 1px ${colors.veryDarkBorwn};
      background: ${colors.transparentBrown};
    }

  ${({ circle }: ButtonInterface) =>
    circle && css`
      min-height: auto;
      padding: ${sizes.size10};
      border-radius: 50%;
    `};

  label {
    color: ${colors.white};
    text-transform: uppercase;
    font-weight: ${fontWeights.size700};
    font-size: ${fontSizes.fontSize18};
    cursor: pointer;
  }
`

export default Button
