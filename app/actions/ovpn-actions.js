import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes';
const LOGIN_URL = 'https://www.ovpn.se/v1/api/client';

function receiveLoginInfo(loginResultDTO) {
  return {
    type: types.RECEIVE_LOGIN_RESULT,
    loginResultDTO
  }
}

function receiveErrorInfo(error) {
  return {
    type: types.RECEIVE_LOGIN_ERROR,
    error
  }
}

export function login(username, password) {
  var form = new FormData();
  form.append('username', username);
  form.append('password', password);

  return dispatch => {
    return fetch(LOGIN_URL, {
      method: 'POST',
      body: form
    }).then(response => {
      if (response.ok) {
        return Promise.resolve(response.json());
      }
      return response.json().then(json => {
        return Promise.reject(json.error);
      });

    }).then(successResponse => {
      dispatch(receiveLoginInfo(successResponse));
    }).catch((errorMessage) => {
      dispatch(receiveErrorInfo(errorMessage || 'General Connection Error.'));
    });
  }
}

