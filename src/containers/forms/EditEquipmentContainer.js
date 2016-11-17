import React from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../../actions'
import makeFormFieldsContainer from './FormFieldsContainer'
import makeFormActionContainer from './FormActionContainer'
import makeFormSelectContainer from './FormSelectContainer'
import FormTagsContainer from './FormTagsContainer'
import FormCheckContainer from './FormCheckContainer'
import { registrationFormValidate } from '../../helpers'
import EditEquipment from '../../components/EditEquipment'


const requiredFields = [
  'name', 'category'
]

const FormFieldsContainer = makeFormFieldsContainer(requiredFields, registerUser)
const FormActionContainer = makeFormActionContainer(requiredFields, registerUser, registrationFormValidate)
const FormSelectContainer = makeFormSelectContainer()

const EditEquipmentContainer = EditEquipment(
  FormFieldsContainer, FormSelectContainer,
  FormTagsContainer, FormCheckContainer,
  FormActionContainer
)

const mapStateToProps = state => ({
  categories: state.data.categories || [],
  isAKit: state.form.values.isAKit || false
})

export default connect(mapStateToProps)(EditEquipmentContainer)
