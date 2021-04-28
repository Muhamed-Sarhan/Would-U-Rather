import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Login from './Login';
import { getInitData } from '../actions/shared';
import Home from './Home';
import LeaderBoard from './LeaderBoard';
import AddQuestion from './AddQuestion';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getInitData());
  }
  render() {
    const { AuthUser } = this.props;
    return (
      <Router>
        <>
          <Nav />
          <div className='container'>
            {!AuthUser ? (
              <div className='content'>
                <Login />
              </div>
            ) : (
              <div className='content'>
                <Route path='/' exact component={Home} />
                <Route path='/LeaderBoard' component={LeaderBoard} />
                <Route path='/newQ' component={AddQuestion} />
              </div>
            )}
          </div>
        </>
      </Router>
    );
  }
}
function mapStateToProps({ AuthUser }) {
  return {
    AuthUser,
  };
}

export default connect(mapStateToProps)(App);
