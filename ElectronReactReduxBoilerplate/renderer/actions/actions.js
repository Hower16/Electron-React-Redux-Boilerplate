// src/actions.js
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function loginSuccess(username) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      username
    }
  };
}
