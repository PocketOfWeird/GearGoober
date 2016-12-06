export const RAISE_NOTE = 'RAISE_NOTE'
export const CLEAR_NOTE = 'CLEAR_NOTE'

export const raiseNote = (note) => ({
  type: RAISE_NOTE,
  payload: note
})

export const clearNote = () => ({
  type: CLEAR_NOTE
})
