import api from '../../config/api'
import UserInterface, { UserInputInterface } from '../../models/interfaces/User'
const path = '/easy-coffee/v1/customer'

const getByCpf = (cpf: string) =>
  api
    .get<UserInterface>(`${path}/get-by-cpf/${cpf}`)
    .then((response) => response.data)
    .catch((error) => {
      switch (error.response.status) {
        case 500:
          throw Error('Usuário não encontrado!')
      }
    })

const save = (user: UserInputInterface) =>
  api.post<UserInterface>(`${path}`, user).then((response) => response.data)

export { getByCpf, save }
