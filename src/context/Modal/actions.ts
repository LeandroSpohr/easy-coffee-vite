import { ActionTypes } from './types'
import ModalInterface from '../../models/interfaces/Modal'

export const setModal = (payload: ModalInterface): ActionTypes => {
  return {
    type: 'SET_MODAL',
    payload,
  }
}
