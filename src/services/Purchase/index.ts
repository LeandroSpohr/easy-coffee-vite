import api from '../../config/api'
import PurchaseInterface from '../../models/interfaces/Purchase'

const path = '/easy-coffee/v1/purchase'

const getAllOpen = (userId: string) => api
  .get<PurchaseInterface[]>(`${path}/customer/${userId}/get-all-open`)
  .then((response) => response.data)

export {
  getAllOpen
}
