import React, { PropTypes } from 'react'
import { Card, CardHeader} from 'material-ui/Card'


const Logo = ({ title }) => (
  <Card>
    <CardHeader
      title={title}
      avatar='logo_sm.png'
    />
  </Card>
)

Logo.propTypes = {
  title: PropTypes.string.isRequired
}

export default Logo
