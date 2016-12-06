import { randomId } from '../helpers'


export const FORM_TAG_CHANGE = 'FORM_TAG_CHANGE'
export const FORM_TAG_REMOVE = 'FORM_TAG_REMOVE'

export const formTagAdd = (e, defaultTagState) => {
  const newId = randomId()
  return {
    type: FORM_TAG_CHANGE,
    payload: {
      name: e.target.name,
      value: { name: e.target.value.trim(), id: newId, ...defaultTagState },
      key: newId
    }
  }
}

export const formTagRemove = (name, key) => ({
  type: FORM_TAG_REMOVE,
  payload: {
    name,
    key
  }
})
