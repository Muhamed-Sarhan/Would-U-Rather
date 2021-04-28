import { _getUsers, _getQuestions } from '../utils/_DATA';
import { getUsers } from './users';
import { getQuestions } from './questions';

function _getInitialData() {
  return Promise.all([_getQuestions(), _getUsers()]).then(
    ([questions, users]) => ({
      questions,
      users,
    })
  );
}

export function getInitData() {
  return (dispatch) => {
    return _getInitialData().then(({ questions, users }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    });
  };
}
