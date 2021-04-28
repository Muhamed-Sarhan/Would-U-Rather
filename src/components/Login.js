import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthUser } from '../actions/auth';

class Login extends Component {
  state = {
    userName: '',
  };

  handleSubmit = (e) => {
    const { userName } = this.state;
    e.preventDefault();
    this.props.dispatch(setAuthUser(userName));
  };
  handleUserName = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  render() {
    const { users, id } = this.props;
    return (
      <div className='login'>
        <div className='header'>
          <h2>Welcome to the Would You Rather App!</h2>
          <p>please sign in to continue</p>
        </div>
        <h3>Sign in</h3>
        <form onSubmit={this.handleSubmit}>
          <select onClick={(e) => this.handleUserName(e)}>
            <option disabled>Choose...</option>
            {id.map((user) => (
              <option value={user} key={user}>
                {users[user].name}
              </option>
            ))}
          </select>
          <button disabled={this.state.userName === ''}>submit</button>
        </form>
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    id: Object.keys(users),
    users,
  };
}

export default connect(mapStateToProps)(Login);
