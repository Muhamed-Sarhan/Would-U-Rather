import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class Home extends Component {
  state = {
    Un_answeredQ: true,
  };

  handleUnAnsweredchange = () => {
    this.setState({
      Un_answeredQ: true,
    });
  };
  handleAnsweredchange = () => {
    this.setState({
      Un_answeredQ: false,
    });
  };

  render() {
    const { answeredQ, unAnsweredQ, AuthUser } = this.props;
    const { Un_answeredQ } = this.state;
    return (
      <div className='HomePage'>
        <div className='allofAll'>
          <div className='allQ'>
            <a
              onClick={this.handleUnAnsweredchange}
              className={Un_answeredQ ? 'active' : ''}
              style={{ color: 'white' }}
            >
              unAnswered Questions
            </a>
          </div>
          <div className='allQ'>
            <a
              onClick={this.handleAnsweredchange}
              className={Un_answeredQ ? '' : 'active'}
              style={{ color: 'white' }}
            >
              Answered Questions
            </a>
          </div>
        </div>
        <div className='questions'>
          <ul>
            {Un_answeredQ
              ? unAnsweredQ.map((id) => (
                  <li key={id}>
                    <Question questionID={id} />
                  </li>
                ))
              : answeredQ.map((id) => (
                  <li key={id}>
                    <div>
                      <Question questionID={id} Un_answeredQ={Un_answeredQ} />
                    </div>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, AuthUser }) {
  const allQuestionsId = Object.keys(questions);
  const unAnsweredQ = allQuestionsId.filter((id) => {
    return (
      questions[id].optionOne.votes.length === 0 &&
      questions[id].optionTwo.votes.length === 0
    );
  });
  const answeredQ = allQuestionsId.filter((id) => {
    return (
      questions[id].optionOne.votes.length > 0 ||
      questions[id].optionTwo.votes.length > 0
    );
  });
  return {
    answeredQ: answeredQ.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    unAnsweredQ: unAnsweredQ.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    AuthUser,
  };
}

export default connect(mapStateToProps)(Home);
