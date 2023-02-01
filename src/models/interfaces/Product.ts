export default interface ProductInterface {
  id: string
  description: string
  value: number
  imgUrl: string
  createdAt: string
  updatedAt: string
}

export interface RegisterProductInterface {
  title: string
  value: number
  imgUrl: string
}
