export const CHANGE_THEME = 'CHANGE_THEME'
export const CLEAR_THEME = 'CLEAR_THEME'

interface ChangeTheme {
  type: typeof CHANGE_THEME
}

interface ClearTheme {
  type: typeof CLEAR_THEME
}

export type ActionTypes = ChangeTheme | ClearTheme
