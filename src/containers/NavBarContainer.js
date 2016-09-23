import { connect } from 'react-redux'
import NavBar from '../components/NavBar'

const mapStateToProps = (state) => ({
  activeParentView: state.get('activeView').first()
})

const NavBarContainer = connect(
  mapStateToProps
)(NavBar)

export default NavBarContainer
