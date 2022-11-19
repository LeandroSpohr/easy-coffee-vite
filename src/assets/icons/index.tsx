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
`

export const AddIcon = styled(MdAdd).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => (color || white)};
`

export const ExitIcon = styled(MdOutlineExitToApp).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => (color || white)};
`

export const LeftArrowIcon = styled(MdArrowBackIosNew).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => (color || white)};
`

export const CloseIcon = styled(MdClose).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => (color || white)};
`

export const AccountIcon = styled(MdOutlineAccountBox).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => (color || white)};
`