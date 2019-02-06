import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actionTypes from '../actionTypes';
import { logInAction, signUpAction } from '../authAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('mock auth', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should mock login ', () => {
    fetchMock.postOnce(`${actionTypes.BASEURL}auth/login`, {
      body: { user_name: 'soko' },
      headers: {
        'content-type': 'application/json',
        authorization: ' Bearer moked-token'
      }
    });

    const expectedActions = [
      {
        type: actionTypes.LOGIN_ACTION,
        payload: { user_name: 'soko' }
      }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(logInAction({ user_name: 'soko' })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should mock login errors', () => {
    fetchMock.postOnce(`${actionTypes.BASEURL}auth/login`, {
      body: { message: 'soko' },
      headers: {
        'content-type': 'application/json',
        authorization: ' Bearer moked-token'
      }
    });

    const expectedActions = [
      {
        type: actionTypes.LOGIN_ACTION_ERRORS,
        payload: { message: 'soko' }
      }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(logInAction({ message: 'soko' })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should mock signup ', () => {
    fetchMock.postOnce(`${actionTypes.BASEURL}auth/signup`, {
      body: { user_name: 'soko' },
      headers: {
        'content-type': 'application/json',
        authorization: ' Bearer moked-token'
      }
    });

    const expectedActions = [
      {
        type: actionTypes.SIGNUP_ACTION,
        payload: { user_name: 'soko' }
      }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(signUpAction({ user_name: 'soko' })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should mock signup errors', () => {
    fetchMock.postOnce(`${actionTypes.BASEURL}auth/signup`, {
      body: { message: 'soko' },
      headers: {
        'content-type': 'application/json',
        authorization: ' Bearer moked-token'
      }
    });

    const expectedActions = [
      {
        type: actionTypes.SIGNUP_ACTION_ERRORS,
        payload: { message: 'soko' }
      }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(signUpAction({ message: 'soko' })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
