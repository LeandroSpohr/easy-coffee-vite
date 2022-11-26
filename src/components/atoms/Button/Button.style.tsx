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
  color: ${colors.white};
  text-transform: uppercase;
  font-weight: ${fontWeights.size700};
  font-size: ${fontSizes.fontSize18};
  display:flex;

  :active{
    transition: 100ms;
    transform: scale(0.80);
  }

  ${({ circle }: ButtonInterface) =>
    circle && css`
      min-height: auto;
      padding: ${sizes.size10};
      border-radius: 50%;

      :active{
        transition: 100ms;
        transform: scale(0.80);
        border-radius: 50%;
      }
    `};
`

export default Button
