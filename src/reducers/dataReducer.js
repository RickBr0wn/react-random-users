import { UPDATE_DATA } from '../actions/dataActions'

const dataReducer = (state = [], { type, payload }) => {
  switch(type) {
    case UPDATE_DATA:
      return [ ...state, payload]
    default:
      return state
  }
}

export default dataReducer