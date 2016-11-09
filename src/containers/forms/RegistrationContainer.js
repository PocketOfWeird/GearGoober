import React from 'react'
import { connect } from 'react-redux'
import Registration from '../../components/Registration'


const mapStateToProps = state => ({
  tennant: state.view.current[1]
})

export default connect(mapStateToProps)(Registration)
