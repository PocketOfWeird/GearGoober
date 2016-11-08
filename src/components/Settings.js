import React from 'react'
import { connect } from 'react-redux'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Toggle from 'material-ui/Toggle'


const Settings = ({ appSettings, handleLogOut }) => (
  <div>
    <Card>
      <CardTitle
        title="Your Settings"
      />
      <CardActions>
        <FlatButton
          label="Log Out"
          onTouchTap={handleLogOut}
        />
      </CardActions>
    </Card>
    <Card>
      <CardTitle
        title="App Settings"
      />
      <CardText
        style={styles.block}
      >
        {appSettings.map(setting =>
          <Toggle
            key={setting.id}
            label={setting.name}
            defaultToggled={setting.value}
          />
        )}
      </CardText>
    </Card>
  </div>
)

let styles = {
  block: {
    maxWidth: 250
  }
}

export default Settings
