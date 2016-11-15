import { isLoading } from '../../selectors'


export const formMapStateToProps = state => ({
  values: state.form.values,
  errors: state.form.errors,
  isLoading: isLoading(state)
})

export * from './formValidation'
export * from './registrationForm'
