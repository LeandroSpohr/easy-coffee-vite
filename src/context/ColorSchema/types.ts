export const CHANGE_COLOR_SCHEMA = 'CHANGE_COLOR_SCHEMA'
export const CLEAR_COLOR_SCHEMA = 'CLEAR_COLOR_SCHEMA'

interface ChangeColorSchema {
  type: typeof CHANGE_COLOR_SCHEMA
}

interface ClearColorSchema {
  type: typeof CLEAR_COLOR_SCHEMA
}

export type ActionTypes = ChangeColorSchema | ClearColorSchema
