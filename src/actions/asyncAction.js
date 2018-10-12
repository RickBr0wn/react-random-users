export const FETCH_USER = 'FETCH_USER'

export const getUser = () => {
  return dispatch => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(user => {
        dispatch({
          type: FETCH_USER,
          payload: user
        })
      })
      .catch(err => console.log('There has been an error: ' + err))
  }
}