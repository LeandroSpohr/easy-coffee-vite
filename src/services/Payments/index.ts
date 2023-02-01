import api from '../../config/api'
import PaidPurchase from '../../models/interfaces/PaidPurchase'
const path = '/easy-coffee/v1/payment/customer/'

const getAll = (userId?: string) =>
  api.get<PaidPurchase[]>(`${path}/${userId}/get-all`).then((response) => response.data)

export { getAll }
