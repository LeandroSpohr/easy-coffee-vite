import styled from 'styled-components'
import {
  MdOutlineShoppingCart, 
  MdAdd, 
  MdOutlineExitToApp,
  MdArrowBackIosNew, 
  MdClose,
  MdOutlineAccountBox,
} from 'react-icons/md'

import { colors, sizes } from '../styles/variables'

const {
  white,
} = colors

const { size22 } = sizes

const defaultConfig = (props: IconInterface) => ({
  size: props.size ? props.size : size22,
})

interface IconInterface {
  color?: string
  size?: string
}

// SGV icons

export const CartIcon = styled(MdOutlineShoppingCart).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => (color || white)};
  cursor: pointer;
  
  :active{
    transition: 0.01s;
    transform: scale(0.80);
    box-shadow: inset 3px 2px 22px 1px ${colors.veryDarkBorwn};
    background: ${colors.transparentBrown};
    border-radius: 50%;
  }
`

export const AddIcon = styled(MdAdd).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => (color || white)};
  cursor: pointer;

`

export const ExitIcon = styled(MdOutlineExitToApp).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => (color || white)};
  cursor: pointer;

  :active{
    transition: 0.01s;
    transform: scale(0.80);
    box-shadow: inset 3px 2px 22px 1px ${colors.veryDarkBorwn};
    background: ${colors.transparentBrown};
    border-radius: 50%;
  }
`

export const LeftArrowIcon = styled(MdArrowBackIosNew).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => (color || white)};
  cursor: pointer;

  :active{
    transition: 0.01s;
    transform: scale(0.80);
    box-shadow: inset 3px 2px 22px 1px ${colors.veryDarkBorwn};
    background: ${colors.transparentBrown};
    border-radius: 50%;
  }
`

export const CloseIcon = styled(MdClose).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => (color || white)};
  cursor: pointer;

`

export const AccountIcon = styled(MdOutlineAccountBox).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => (color || white)};
  cursor: pointer;

  :active{
    transition: 0.01s;
    transform: scale(0.80);
    box-shadow: inset 3px 2px 22px 1px ${colors.veryDarkBorwn};
    background: ${colors.transparentBrown};
    border-radius: 50%;
  }
`