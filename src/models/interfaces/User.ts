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
  cart: CartInterface[]
  hasUser: boolean
  paymentValue: number
  permissionLevel: UserEnum
  user: UserInterface | null
}

export interface UserInputInterface {
  cpf: string
  name: string
  birthDate: string | Date
}
