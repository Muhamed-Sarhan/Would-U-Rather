import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
  render() {
    const { user, AuthUser } = this.props;
    const { avatarURL, name, answers, questions } = user;
    const answeredQ = Object.keys(answers).length;
    const CreatedQ = questions.length;
    return (
      <div className='Users'>
        <div className='img-part'>
          <img src={avatarURL} alt={`avatar of ${name}`} />
        </div>
        <div className='answers'>
          <h2>{name}</h2>
          <p>
            Answered Questions <span>{answeredQ}</span>
          </p>
          <p>
            Created Questions <span>{CreatedQ}</span>
          </p>
        </div>
        <div className='score'>
          <h3>Score</h3>
          <p>{answeredQ + CreatedQ}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, AuthUser }, { id }) {
  const user = users[id];
  return {
    user,
    AuthUser,
  };
}
export default connect(mapStateToProps)(Users);
