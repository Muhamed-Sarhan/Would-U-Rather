import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteAuthUser } from '../actions/auth';

class Nav extends Component {
  handleLogOut = () => {
    const { dispatch } = this.props;
    dispatch(deleteAuthUser());
  };

  render() {
    const { users, AuthUser } = this.props;

    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink className='navItems' exact to='/' activeclassname='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='navItems' to='/newQ' activeclassname='active'>
              NewQuestion
            </NavLink>
          </li>
          <li>
            <NavLink
              className='navItems'
              to='/LeaderBoard'
              activeclassname='active'
            >
              LeaderBroad
            </NavLink>
          </li>
          {AuthUser ? (
            <div className='UserName'>
              <li>
                <span style={{ color: 'rgb(181, 120, 189)' }}>
                  Hello {users[AuthUser].name}
                </span>
              </li>
              <li>
                <img src={users[AuthUser].avatarURL} className='NavImg' />
              </li>
              <li>
                <a
                  className='navItems'
                  onClick={this.handleLogOut}
                  activeclassname='active'
                >
                  Logout
                </a>
              </li>
            </div>
          ) : (
            ''
          )}
        </ul>
      </nav>
    );
  }
}
function mapStateToProps({ users, AuthUser }) {
  return {
    users,
    AuthUser,
  };
}
export default connect(mapStateToProps)(Nav);
