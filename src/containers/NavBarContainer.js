import { connect } from 'react-redux'
import NavBar from '../components/NavBar'

const mapStateToProps = (state) => ({
  activeParentView: state.getIn(['views', 'activeView']).first()
})

const NavBarContainer = connect(
  mapStateToProps
)(NavBar)

export default NavBarContainer
