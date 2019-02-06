import actionTypes from '../actions/actionTypes';

const initialState = {
  user: {},
  errors: { message: '' }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGNUP_ACTION:
      return {
        ...state,
        user: action.payload,
        errors: { message: '' }
      };
    case actionTypes.SIGNUP_ACTION_ERRORS:
      return {
        ...state,
        errors: action.payload,
        user: {}
      };
    case actionTypes.LOGIN_ACTION:
      return {
        ...state,
        user: action.payload,
        errors: { message: '' }
      };
    case actionTypes.LOGIN_ACTION_ERRORS:
      return {
        ...state,
        errors: action.payload,
        user: {}
      };
    default:
      return state;
  }
}
