import { get_users } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case get_users:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
}
