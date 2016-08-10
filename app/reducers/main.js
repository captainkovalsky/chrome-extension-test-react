import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  isLogged: false,
  errorMessage: ''
};

const actionsMap = {
  [ActionTypes.LOGIN](state, action) {
    return {
      isLogged: false,
      errorMessage: ''

    };
  },

  [ActionTypes.RECEIVE_LOGIN_RESULT](state, action) {
      return Object.assign({}, state, {
        isLogged: action.loginResultDTO.status,
        error: ''
      });
  },

  [ActionTypes.RECEIVE_LOGIN_ERROR](state, action) {
    const newState = Object.assign({}, state, {
      isLogged: false,
      errorMessage: action.error
    });
    return newState;
  }
};

export default function main(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
