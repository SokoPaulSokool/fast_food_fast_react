import actionTypes from '../actions/actionTypes';

const initialState = {
  dat: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TEST_ACTION:
      return {
        ...state,
        like_status: action.payload,
        likes: {}
      };
    default:
      return state;
  }
}
