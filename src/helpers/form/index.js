import React from 'react'
import map from 'lodash.map'
import { isLoading } from '../../selectors'


export const formMapStateToProps = state => ({
  values: state.form.values,
  errors: state.form.errors,
  isLoading: isLoading(state)
})

export const formSelectMap = (collection,
  subNameFunction=undefined, id='id', name='name') => {
  return map(collection, (object, key) =>
    <div
      key={key}
      value={object[id]}
      name={object[name]}
      subName={ subNameFunction !== undefined ? subNameFunction(object) : ''}
    />
  )
}

export * from './formValidation'
export * from './registrationForm'
