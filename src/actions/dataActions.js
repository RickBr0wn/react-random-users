export const UPDATE_DATA = 'UPDATE_DATA'

export const updateData = newData => {
  return {
    type: UPDATE_DATA,
    payload: {
      data: newData
    }
  }
}