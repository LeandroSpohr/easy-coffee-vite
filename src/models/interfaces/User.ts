import { UserEnum } from '../Enums/User'
import CartInterface from './Cart'

export default interface UserInterface {
  id: string
  cpf: string
  name: string
  birthDate: string
  createdAt: string
  updatedAt: string
}

export interface UserContextInterface {
  hasUser: boolean
  permissionLevel: UserEnum
  user: UserInterface | null
  cart: CartInterface[]
}

export interface UserInputInterface {
  cpf: string
  name: string
  birthDate: string | Date
}
