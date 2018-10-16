import { UPDATE_USER, GOT_USER } from '../actions/userActions'

export const userReducer = (state = [], { type, payload }) => {
  switch(type) {
    case UPDATE_USER:
      return payload.user
    case  GOT_USER:
      return payload
    default:
      return state
  }
}