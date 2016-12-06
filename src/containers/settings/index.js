import { connect } from 'react-redux'
import copy from 'copy-to-clipboard'
import { logOutUser } from '../../actions'
import getAppSettings from './appSettings'
import Settings from '../../components/Settings'
import { uploadEquipment } from '../../helpers'


const mapStateToProps = state => ({
  appSettings: getAppSettings(state),
  handleUploadEquip: e => {
    uploadEquipment(e)
  }
})

const mapDispatchToProps = dispatch => ({
  handleLogOut: e => dispatch(logOutUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
