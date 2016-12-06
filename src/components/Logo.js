import React, { PropTypes } from 'react'
import { Card, CardHeader} from 'material-ui/Card'


const Logo = ({ title, subtitle }) => (
  <Card>
    <CardHeader
      title={title}
      subtitle={ subtitle ? subtitle : ''}
      avatar='logo_sm.png'
    />
  </Card>
)

Logo.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default Logo
