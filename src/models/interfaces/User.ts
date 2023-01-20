import CartInterface from './Cart'
import IdleInterface from './Idle'

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
  user: UserInterface | null
  cart: CartInterface[]
  idle: IdleInterface
}

export interface UserInputInterface {
  cpf: string
  name: string
  birthDate: string | Date
}
