import ArticleReducer from '../authReducer';
import actionTypes from '../../actions/actionTypes';

const initialState = {
  user: {},
  errors: { message: '' }
};

describe('test auth reducer', () => {
  it('should return the initial state unknow action type', () => {
    expect(ArticleReducer(undefined, {})).toEqual({
      user: {},
      errors: { message: '' }
    });
  });
  it('should return new state on signup', () => {
    expect(
      ArticleReducer(undefined, {
        type: actionTypes.SIGNUP_ACTION,
        payload: {
          user_name: 'soko'
        }
      })
    ).toEqual({
      user: { user_name: 'soko' },
      errors: { message: '' }
    });
  });
  it('should return new state on signup errors', () => {
    expect(
      ArticleReducer(undefined, {
        type: actionTypes.SIGNUP_ACTION_ERRORS,
        payload: {
          message: 'soko'
        }
      })
    ).toEqual({
      user: {},
      errors: { message: 'soko' }
    });
  });
  it('should return new state on login', () => {
    expect(
      ArticleReducer(undefined, {
        type: actionTypes.LOGIN_ACTION,
        payload: {
          user_name: 'soko'
        }
      })
    ).toEqual({
      user: { user_name: 'soko' },
      errors: { message: '' }
    });
  });
  it('should return new state on login errors', () => {
    expect(
      ArticleReducer(undefined, {
        type: actionTypes.LOGIN_ACTION_ERRORS,
        payload: {
          message: 'soko'
        }
      })
    ).toEqual({
      user: {},
      errors: { message: 'soko' }
    });
  });
});
