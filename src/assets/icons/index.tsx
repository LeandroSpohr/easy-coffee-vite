import styled from 'styled-components'
import {
  MdOutlineShoppingCart,
  MdAdd,
  MdRemove,
  MdOutlineExitToApp,
  MdArrowBackIosNew,
  MdClose,
  MdOutlineAccountBox,
  MdFullscreen,
  MdFullscreenExit,
  MdOutlineHistoryEdu,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from 'react-icons/md'

import { TbShoppingCartPlus } from 'react-icons/tb'

import { colors, sizes } from '../styles/variables'

const { white } = colors

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
  color: ${({ color }: IconInterface) => color || white};
`

export const AddIcon = styled(MdAdd).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => color || white};
`

export const AddToCartIcon = styled(TbShoppingCartPlus).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => color || white};
`

export const RemoveIcon = styled(MdRemove).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => color || white};
`

export const ExitIcon = styled(MdOutlineExitToApp).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => color || white};
`

export const LeftArrowIcon = styled(MdArrowBackIosNew).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => color || white};
`

export const CloseIcon = styled(MdClose).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => color || white};
`

export const AccountIcon = styled(MdOutlineAccountBox).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => color || white};
`

export const FullScreenIcon = styled(MdFullscreen).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => color || white};
`

export const FullScreenExitIcon = styled(MdFullscreenExit).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => color || white};
`

export const PurchaseHistoricIcon = styled(MdOutlineHistoryEdu).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => color || white};
`

export const ArrowDownIcon = styled(MdKeyboardArrowDown).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => color || white};
`

export const ArrowUpIcon = styled(MdKeyboardArrowUp).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => color || white};
`
