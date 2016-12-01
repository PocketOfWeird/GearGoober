import React from 'react'
import { connect } from 'react-redux'
import Categories from '../../components/Categories'


const mapStateToProps = state => ({
  categoriesObject: state.data.categories
})

const mapDispatchToProps = dispatch => ({
  handleClick: id => e => console.log(id)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)
