// src/reducers/userReducer.js
import { LOGIN_SUCCESS } from '../actions/actions';

const initialState = {
  username: '',
  isLoggedIn: false
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        isLoggedIn: true
      };
    default:
      return state;
  }
}

export default userReducer;
