import actionType from './actionTypes';

const signUpAction = data => dispatch => {
  return fetch(`${actionType.BASEURL}auth/signup`, {
    method: 'POST',

    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => {
      if (data.message) {
        dispatch({
          type: actionType.SIGNUP_ACTION_ERRORS,
          payload: data
        });
      } else {
        dispatch({
          type: actionType.SIGNUP_ACTION,
          payload: data
        });
      }
    });
};

const logInAction = data => dispatch => {
  return fetch(`${actionType.BASEURL}auth/login`, {
    method: 'POST',

    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: actionType.LIKE,
        payload: data
      })
    );
};

export { signUpAction, logInAction };
