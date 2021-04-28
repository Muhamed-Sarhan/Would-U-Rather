import { combineReducers } from 'redux';
import questions from './questions';
import users from './users';
import AuthUser from './auth';

export default combineReducers({
  questions,
  users,
  AuthUser,
});
