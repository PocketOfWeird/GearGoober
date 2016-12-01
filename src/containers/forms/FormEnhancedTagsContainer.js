import React from 'react'
import { connect } from 'react-redux'
import { formTagAdd, formTagRemove } from '../../actions'
import FormTags from '../../components/FormTags'


const makeMapStateToProps = (name, searchSource) => state => ({
  error: state.form.errors[name] || '',
  tags: state.form.values[name] || {},
  enhanced: true,
  dataSource: state.data.suggestions[searchSource] || []
})

const mapDispatchToProps = dispatch => ({
  handleChange: defaultTagState => e => {
    if (e.key === 'Enter') {
      if (e.target.value.trim().length > 0 ) {
        dispatch(formTagAdd(e, defaultTagState))
        e.target.value = ''
      }
    }
  },
  handleTagDelete: (name, key) => () => dispatch(formTagRemove(name, key))
})

const makeFormEnhancedTagsContainer = (name, searchSource) => {
  const mapStateToProps = makeMapStateToProps(name, searchSource)
  return connect(
    mapStateToProps,
    mapDispatchToProps,
    null, { pure: false }
  )(FormTags)
}

export default makeFormEnhancedTagsContainer
