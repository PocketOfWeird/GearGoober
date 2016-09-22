import { connect } from 'react-redux'
import { dispatchActivateView } from '../store/helpers'
import NavBar from '../components/NavBar'

const mapStateToProps = (state) => ({
  activeParentView: state.get('activeView').first()
})

const mapDispatchToProps = (dispatch) => ({
  onNavClick: dispatchActivateView(dispatch)
})

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)

export default NavBarContainer
