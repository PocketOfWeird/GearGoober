import React, { PropTypes } from 'react'
import { formSelectMap, defaultBarcodeState } from '../helpers'


const EditEquipment = (FormFieldsContainer,
  FormSelectContainer, FormTagsContainer, FormCheckContainer,
  FormActionContainer) => ({ categories, isAKit }) => (
  <div style={styles}>
    <FormCheckContainer name='isAKit' label='This is a Kit' />
    <FormSelectContainer name='category' label='Select a Category'>
      {formSelectMap(categories, cat => cat.parentName)}
    </FormSelectContainer>
    {!isAKit &&
      <div>
        <FormFieldsContainer>
          <div name='name' label='Name' />
          <div name='mfg' label='Manufacturer' />
          <div name='model' label='Model' />
          <div name='cost' label='Cost' type='number' />
        </FormFieldsContainer>
        <FormTagsContainer
          name='barcodes'
          label='Barcodes'
          defaultTagState={defaultBarcodeState}
        />
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
  categories: PropTypes.object.isRequired,
  isAKit: PropTypes.bool.isRequired
}

export default EditEquipment
