import { List } from 'immutable'
import { connect } from 'react-redux'
import { activateView } from '../store/actions'
import NavBar from '../components/NavBar'

const mapStateToProps = (state) => ({
  activeParentView: state.get('activeView').first()
})

const mapDispatchToProps = (dispatch) => ({
  onNavClick: (view) => {
    dispatch(activateView(List([view])))
  }
})

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)

export default NavBarContainer
