import { set_AuthUser, delete_AuthUser } from '../actions/auth';

export default function AuthUser(state = null, action) {
  switch (action.type) {
    case set_AuthUser:
      return action.id;
    case delete_AuthUser:
      return null;
    default:
      return state;
  }
}
