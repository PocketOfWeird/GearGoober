import { Map } from 'immutable'
import { validate } from '../helpers'


export const FORM_VALUE_CHANGE = 'FORM_VALUE_CHANGE'

export const valueChange = (event) => ({
  type: FORM_VALUE_CHANGE,
  valueId: event.target.id,
  payload: Map({
    value: event.target.value,
    error: validate(event.target.value, event.target.type)
  })
})
