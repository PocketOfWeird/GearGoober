import { connect } from 'react-redux'
import { logOutUser } from '../../actions'
import Settings from '../../components/Settings'


const mapStateToProps = state => ({
  appSettings: [
    {id: '2398398ude98jd843', name: 'This setting', value: true},
    {id: '389324dn743fy489f', name: 'That setting', value: false}
  ]
})

const mapDispatchToProps = dispatch => ({
  handleLogOut: e => dispatch(logOutUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
