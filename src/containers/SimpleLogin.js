import React from 'react'
import { connect } from 'react-redux'
import { setValue, login } from '../store/actions'
import { isValidValue } from '../store/helpers'


let SimpleLogin = ({ fetching, handleChange, handleClick, email, password }) => (
  <div>
    <label>Email</label>
    <input id="email" type='email' value={email} onChange={handleChange} />
    <label>Password</label>
    <input id="password" type='password' value={password} onChange={handleChange} />
    <button onClick={handleClick}>Login</button>
  </div>
)


const mapStateToProps = (state) => ({
  fetching: state.getIn(['auth','fetching']),
  email: state.getIn(['form','email']) || '',
  password: state.getIn(['form', 'password']) || ''
})

const mapDispatchToProps = (dispatch) => ({
  handleChange: e => {
    dispatch(setValue(e.target.id, e.target.value, e.target.type))
  },
  handleClick: (event) => {
    event.preventDefault()
    if (isValidValue(email.value, email.type) && password.value) {
      dispatch(login(email.value, password.value))
    }
  }
})

SimpleLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleLogin)

export default SimpleLogin
