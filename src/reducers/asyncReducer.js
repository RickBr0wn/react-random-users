import { FETCH_USER } from '../actions/asyncAction'

let initialState = []

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case FETCH_USER:
      return [ ...state, payload ]
    default:
      return state
  }
}