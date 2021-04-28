import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSavedData } from '../actions/questions';

class AddQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
  };
  handleOptionOne = (e) => {
    const { value } = e.target;
    this.setState({
      optionOne: value,
    });
  };
  handleOptionTwo = (e) => {
    const { value } = e.target;
    this.setState({
      optionTwo: value,
    });
  };
  handleSubmit = (e) => {
    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;
    dispatch(handleSavedData(optionOne, optionTwo));
    e.preventDefault();
    this.setState({
      optionOne: '',
      optionTwo: '',
    });
  };
  render() {
    const { optionOne, optionTwo } = this.state;
    return (
      <div className='addQuestion'>
        <h1>Add a New Question</h1>
        <div className='questionContainer'>
          <h4>Would You Rather ....??</h4>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              value={optionOne}
              onChange={this.handleOptionOne}
              placeholder='Enter Your First Option'
            />
            <h3>OR</h3>
            <input
              type='text'
              value={optionTwo}
              onChange={this.handleOptionTwo}
              placeholder='Enter Your Second Option'
            />
            <button disabled={optionOne === '' || optionTwo === ''}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ AuthUser }) {
  return {
    AuthUser,
  };
}

export default connect(mapStateToProps)(AddQuestion);
