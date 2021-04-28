import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './Users';

class LeaderBoard extends Component {
  render() {
    const { sortedUsersID } = this.props;
    return (
      <div className='LeaderBoards'>
        {sortedUsersID.map((userId) => (
          <li key={userId}>
            <Users id={userId} />
          </li>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const sortedUsersID = Object.keys(users).sort(
    (a, b) =>
      Object.keys(users[b].answers).length +
      users[b].questions.length -
      (Object.keys(users[a].answers).length + users[a].questions.length)
  );
  return {
    sortedUsersID,
  };
}
export default connect(mapStateToProps)(LeaderBoard);
