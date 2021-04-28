import { _getUsers } from '../utils/_DATA';

export const get_users = 'get_users';
export const Update_UserQuestions = 'Update_UserQuestions';

export function getUsers(users) {
  return {
    type: get_users,
    users,
  };
}

export function handleGetUsers() {
  return (dispatch) => {
    return _getUsers().then((users) => {
      dispatch(getUsers(users));
    });
  };
}
