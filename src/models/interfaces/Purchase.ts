import UserInterface from './User'
import ProductInterface from './Product'

export default interface PurchaseInterface {
  id: string
  customer: UserInterface
  product: ProductInterface
  quantity: number
  value: number
  status: string
  statusDescription: string
  purchaseDate: string | Date
  createdAt: string
  updatedAt: string
}

export interface PurchaseInputInterface {
  productId: string
  quantity: number
}
