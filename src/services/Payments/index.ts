import api from '../../config/api'
import PaymentInterface from '../../models/interfaces/Payment'
const path = '/easy-coffee/v1/payment/customer/'

const getAll = (UserId?: string) => api.get<PaymentInterface[]>(`${path}/${UserId}/get-all`)
  .then((response) => response.data)

export {
  getAll
}
