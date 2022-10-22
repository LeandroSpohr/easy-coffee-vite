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
  hasUser: boolean,
  user: UserInterface | null
  cart: CartInterface[]
}
