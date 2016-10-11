
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import isMongoId from 'validator/lib/isMongoId'
import EquipForm from '../../../components/equipment/EquipForm'
import { getEquipmentToEdit, setValue } from '../../../store/actions'


class EquipFormContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    const { dispatch, equipmentId, mode } = this.props
    if (mode==='edit' && isMongoId(equipmentId)) {
      dispatch(getEquipmentToEdit(equipmentId))
    }
  }

  render(){
    const { mode, piece, handleChange, handlePriceChange,
     handleCancel } = this.props
    return (
      <EquipForm mode={mode}
                piece={piece}
                handleChange={handleChange}
                handlePriceChange={handlePriceChange}
                handleCancel={handleCancel} />
    )
  }
}


EquipFormContainer.propTypes = {
  mode: PropTypes.string.isRequired,
  equipmentId: PropTypes.string.isRequired,
  piece: ImmutablePropTypes.map,
  handleChange: PropTypes.func.isRequired,
  handlePriceChange: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    equipmentId: state.hasIn(['views', 'activeView']) ? state.getIn(['views', 'activeView']).last() : '',
    piece: state.get('form')
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  handleChange: e => {
      dispatch(setValue(e.target.id, e.target.value, e.target.type))
  },
  handlePriceChange: (value) => {
    dispatch(setValue('price', value, 'number'))
  },
   handleCancel: e => {
     e.preventDefault()
     history.back()
   }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EquipFormContainer)
