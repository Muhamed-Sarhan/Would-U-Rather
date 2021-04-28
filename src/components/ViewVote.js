import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewVote extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    let {
      optionOne,
      optionTwo,
      Un_answeredQ,
      AuthUser,
      author,
      name,
      avatarURL,
    } = this.props;
    const optOneVotes = optionOne.votes.length;
    const optTwoVotes = optionTwo.votes.length;
    Un_answeredQ = true;
    return (
      <div>
        {Un_answeredQ ? (
          <div>
            <h3> {name} asks:</h3>
            <div>
              <img src={avatarURL} alt={name} />
            </div>
            <div className='question'>
              <h1>Would You Rather</h1>
              <form onSubmit={this.handleSubmit}>
                <input type='radio' value='1' />
                {optionOne.text}
                <input type='radio' value='1' />
                {optionTwo.text}
                <button>Submit</button>
              </form>
            </div>
          </div>
        ) : (
          <div>
            <h3>Asked by {name}</h3>
            <div>
              <img src={avatarURL} alt={name} />
            </div>
            <div className='result'>
              <h1>Results:</h1>
              <div
                className={author === AuthUser ? 'AuthOptionOne' : 'optionOne'}
              >
                <h3>{optionOne.text}</h3>
                <span>percent</span>
                <p>
                  {optOneVotes} of {optOneVotes + optTwoVotes}
                </p>
              </div>
              <div className={author === AuthUser ? 'AuthOptTwo' : 'optionTwo'}>
                <h3>{optionTwo.text}</h3>
                <span>percent</span>
                <p>
                  {optTwoVotes} of {optOneVotes + optTwoVotes}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps({ AuthUser, users }, { question, Un_answeredQ }) {
  const { name, avatarURL } = users[question.author];
  const { optionOne, optionTwo, author } = question;
  return {
    AuthUser,
    avatarURL,
    name,
    author,
    optionOne,
    optionTwo,
    Un_answeredQ,
  };
}
export default connect(mapStateToProps)(ViewVote);
