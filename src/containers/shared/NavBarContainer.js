import { connect } from 'react-redux'
import NavBar from '../../components/shared/NavBar'
import { setCurrentView } from '../../actions'
import { firstViewToIndex } from '../../selectors'


const mapStateToProps = (state) => ({
  selectedIndex: firstViewToIndex(state)
})

const mapDispatchToProps = (dispatch) => ({
  handleTouchTap: (view) => () => dispatch(setCurrentView([view]))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
