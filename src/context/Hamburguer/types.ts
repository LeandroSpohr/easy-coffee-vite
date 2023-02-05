import IHamburguer from '../../models/interfaces/Hamburguer'

export const SET_HAMBURGUER = 'SET_HAMBURGUER'
export const CLOSE_HAMBURGUER = 'CLOSE_HAMBURGUER'

interface SetHamburguer {
  type: typeof SET_HAMBURGUER
  payload: IHamburguer['content']
}

interface CloseHamburguer {
  type: typeof CLOSE_HAMBURGUER
}

export type ActionTypes = SetHamburguer | CloseHamburguer
