
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import EquipForm from '../../../components/equipment/EquipForm'


const EquipFormContainer = ({ mode }) => (
  <EquipForm mode={mode} />
)

EquipFormContainer.propTypes = {
  mode: PropTypes.string.isRequired
}

export default EquipFormContainer
