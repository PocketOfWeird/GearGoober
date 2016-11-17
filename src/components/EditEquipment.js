import React, { PropTypes } from 'react'
import { formSelectMap } from '../helpers'


const EditEquipment = (FormFieldsContainer,
  FormSelectContainer, FormTagsContainer, FormCheckContainer,
  FormActionContainer) => ({ categories, isAKit }) => (
  <div style={styles}>
    <FormCheckContainer name='isAKit' label='This is a Kit' />
    <FormSelectContainer name='category' label='Select a Category'>
      {formSelectMap(categories, cat => cat.subCategory)}
    </FormSelectContainer>
    {!isAKit &&
      <div>
        <FormFieldsContainer>
          <div name='name' label='Name' />
          <div name='model' label='Model' />
          <div name='mfg' label='Manufacturer' />
          <div name='cost' label='Cost' type='number' />
        </FormFieldsContainer>
        <FormTagsContainer name='barcodes' label='Barcodes' />
      </div>
    }
    <FormActionContainer label='Save' />
  </div>
)

let styles = {
  marginTop: 16,
  marginBottom: 56
}

EditEquipment.propTypes = {
  categories: PropTypes.object.isRequired
}

export default EditEquipment
