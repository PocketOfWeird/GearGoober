import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import isMongoId from 'validator/lib/isMongoId'
import Details from '../../../components/equipment/Details'
import { fetchItems } from '../../../store/actions'


class DetailsContainer extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    const { dispatch, equipmentId } = this.props
    if (isMongoId(equipmentId)) {
      dispatch(fetchItems('details', equipmentId))
    } else {
      //TODO: dispatch redirect to last view
    }
  }

  render() {
    const { piece } = this.props
    return (
      <Details piece={piece} />
    )
  }
}


DetailsContainer.propTypes = {
  equipmentId: PropTypes.string.isRequired,
  piece: ImmutablePropTypes.map
}


const mapStateToProps = (state) => ({
  equipmentId: state.hasIn(['views', 'activeView']) ? state.getIn(['views', 'activeView']).last() : '',
  piece: state.getIn(['equipment', 'details'])
})

export default connect(mapStateToProps)(DetailsContainer)
