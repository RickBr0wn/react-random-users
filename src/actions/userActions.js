export const UPDATE_USER = 'UPDATE_USER'
export const FETCH_USER = 'FETCH_USER'
export const SHOW_ERROR = 'SHOW_ERROR'
export const GOT_USER = 'GOT_USER'

export const updateUser = newUser => {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}

export const gotUser = user => {
  return {
    type: GOT_USER,
    payload: {
      first: user.results[0].name.first,
      last: user.results[0].name.last,
      picture: user.results[0].picture.large,
      email: user.results[0].email,
      phone: user.results[0].phone,
      mobile: user.results[0].cell,
      dob: user.results[0].dob.date,
      age: user.results[0].dob.age,
      username: user.results[0].login.username 
    }
  }
}

export const showError = err => {
  return {
    type: SHOW_ERROR,
    payload: {
      user: `${err}`
    }
  }
}

export const fetchAPI = () => {
  return dispatch => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(user => dispatch(gotUser(user)))
      .catch(err => dispatch(showError(err)))
  }
}