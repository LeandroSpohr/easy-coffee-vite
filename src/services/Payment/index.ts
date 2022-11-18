import api from '../../config/api'

const path = '/easy-coffee/v1/payment'

const payPurchases = (userId: string, purchaseIds: string[]) => api
  .post<number>(`${path}/customer/${userId}`, purchaseIds)
  .then((response) => response.data)

export {
  payPurchases
}
