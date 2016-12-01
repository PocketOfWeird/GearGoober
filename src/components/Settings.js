import React from 'react'
import { connect } from 'react-redux'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import Toggle from 'material-ui/Toggle'
import {blue300} from 'material-ui/styles/colors'


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
        {appSettings.map((setting, key) => {
            switch (setting.type) {
              case 'toggle':
                return (
                  <Toggle
                    key={setting.id}
                    label={setting.name}
                    defaultToggled={setting.value}
                  />
                )
                break
              case 'button':
                return (
                  <FlatButton
                    key={setting.id}
                    label={setting.name}
                    primary={key % 2 === 0}
                    secondary={key % 1 === 0}
                    onTouchTap={setting.handleClick}
                  />
                )
                break
              default:
                break
            }
          }
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
