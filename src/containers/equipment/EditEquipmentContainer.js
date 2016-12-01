import React from 'react'
import { connect } from 'react-redux'
import { updateEquipment } from '../../actions'
import makeFormFieldsContainer from '../forms/FormFieldsContainer'
import makeFormActionContainer from '../forms/FormActionContainer'
import makeFormSelectContainer from '../forms/FormSelectContainer'
import makeFormTagsContainer from '../forms/FormTagsContainer'
import makeFormEnhancedTagsContainer from '../forms/FormEnhancedTagsContainer'
import FormCheckContainer from '../forms/FormCheckContainer'
import EditEquipment from '../../components/EditEquipment'


const requiredFields = [
  'name', 'category'
]

const FormFieldsContainer = makeFormFieldsContainer(requiredFields, updateEquipment)
const FormActionContainer = makeFormActionContainer(requiredFields, updateEquipment)
const FormSelectContainer = makeFormSelectContainer()
const FormTagsContainer = makeFormTagsContainer('barcodes')
const FormEnhancedTagsContainer = makeFormEnhancedTagsContainer('pieces', 'equipment')


const EditEquipmentContainer = EditEquipment({
  FormFieldsContainer, FormSelectContainer,
  FormTagsContainer, FormEnhancedTagsContainer,
  FormCheckContainer, FormActionContainer
})

const mapStateToProps = state => ({
  categories: state.data.categories || [],
  isAKit: state.form.values.isAKit || false
})

export default connect(mapStateToProps)(EditEquipmentContainer)
