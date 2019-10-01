import { STORE_ALL_BREEDS } from "./action-types"

export const initialState = []

function reducer(state = initialState, action) {
  switch (action.type) {
    case STORE_ALL_BREEDS:
      return action.data

    default:
      return state
  }
}

export default reducer
