import { connect } from 'react-redux'
import copy from 'copy-to-clipboard'
import { logOutUser } from '../../actions'
import Settings from '../../components/Settings'


const getAppSettings = state => {
  const url = window.location.href
  const registrationLink = url + '#/register/' + state.user.tennant
  return [
    {
      id:0,
      name: 'Copy Registration Link',
      handleClick: e => {
        const success = copy(registrationLink)
        if (success) alert('Link copied!')
        else alert('Error copying link')
      },
      type: 'button'
    },
    {
      id:1,
      name: 'This setting',
      value: true,
      type: 'toggle'
    },
    {
      id:2,
      name: 'That setting',
      value: false,
      type: 'toggle'
    }
  ]
}

const mapStateToProps = state => ({
  appSettings: getAppSettings(state)
})

const mapDispatchToProps = dispatch => ({
  handleLogOut: e => dispatch(logOutUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
