import { firebaseOnce, firebaseUpdate } from './dataActions'
import { randomId } from '../helpers'


export const getCategories = () => (dispatch, getState) => {
  const state = getState()
  const alreadyGotCategories = state.data.categories
  if (!alreadyGotCategories) {
    dispatch(firebaseOnce(
      '/categories/' + state.user.tennant,
      { key: 'categories' }
    ))
  }
}

export const updateEquipment = values => (dispatch, getState) => {
  const tennant = getState().user.tennant
  const newValues = { ...values, id: values.id || randomId() }
  return dispatch(firebaseUpdate(
    '/equipment/' + tennant + '/' + newValues.id,
    newValues,
    'Saved ' + newValues.name,
    { key: 'equipment' }
  ))
}
