import { connect } from 'react-redux'
import Breadcrumb from '../components/Breadcrumb'

const mapStateToProps = (state) => ({
  activeView: state.getIn(['views', 'activeView'])
})

const BreadcrumbContainer = connect(
  mapStateToProps
)(Breadcrumb)

export default BreadcrumbContainer
