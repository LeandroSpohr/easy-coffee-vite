import ModalInterface from '../../models/interfaces/Modal'

export const SET_MODAL = 'SET_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

interface SetModal {
  type: typeof SET_MODAL
  payload: ModalInterface
}

interface CloseModal {
  type: typeof CLOSE_MODAL
}

export type ActionTypes = SetModal | CloseModal
