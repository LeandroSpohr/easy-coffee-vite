import api from '../../config/api'
import PaymentInterface from '../../models/interfaces/Payment'
const path = '/easy-coffee/v1/payment/customer/'

const getAll = (userId?: string) => api.get<PaymentInterface[]>(`${path}/${userId}/get-all`)
  .then((response) => response.data)

export {
  getAll
}
