import { STORE_CHART_DATA } from "./action-types"

export const initialState = []

function reducer(state = initialState, action) {
  switch (action.type) {
    case STORE_CHART_DATA:
      return action.data

    default:
      return state
  }
}

export default reducer
