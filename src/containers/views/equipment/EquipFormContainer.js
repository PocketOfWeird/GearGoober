
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { List, Map } from 'immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'
import isMongoId from 'validator/lib/isMongoId'
import EquipForm from '../../../components/equipment/EquipForm'
import { getEquipmentToEdit, getCategoriesIfNeeded,
   setValue } from '../../../store/actions'


class EquipFormContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    const { dispatch, equipmentId, mode } = this.props
    dispatch(getCategoriesIfNeeded())
    if (mode==='edit' && isMongoId(equipmentId)) {
      dispatch(getEquipmentToEdit(equipmentId))
    }
  }

  render(){
    const { mode, piece, categories, handleChange, handlePriceChange,
     handleCancel } = this.props
    return (
      <EquipForm mode={mode}
                piece={piece}
                categories={categories}
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
  categories: ImmutablePropTypes.listOf(
    ImmutablePropTypes.map.isRequired
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  handlePriceChange: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    equipmentId: state.hasIn(['views', 'activeView']) ?
      state.getIn(['views', 'activeView']).last() : '',
    piece: state.get('form'),
    categories: state.getIn(['equipment', 'categories']) || List([Map()])
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
