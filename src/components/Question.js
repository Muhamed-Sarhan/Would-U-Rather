import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Question extends Component {
  render() {
    const { question, user } = this.props;

    return (
      <div className='question'>
        <h2>{user.name} askes:</h2>
        <div className='question-info'>
          <img src={user.avatarURL} />
          <div className='would-you'>
            <h3>Would You Rather</h3>
            <p>{question.optionOne.text}</p>
            <Link to={'/d'}>
              <button className='linkToPoll'>View Vote</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }, { questionID, Un_answeredQ }) {
  const question = questions[questionID];
  const user = users[question.author];
  return {
    Un_answeredQ,
    question,
    user,
  };
}
export default connect(mapStateToProps)(Question);
