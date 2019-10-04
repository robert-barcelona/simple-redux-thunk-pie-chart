import { cloneDeep } from "lodash"
import { STORE_BREED_IMAGE } from "./action-types"

export const initialState = {}

function reducer(state = initialState, action) {
  switch (action.type) {
    case STORE_BREED_IMAGE:
      const { image, breed } = action.data
      const newState = cloneDeep(state)
      newState[breed] = image
      return newState

    default:
      return state
  }
}

export default reducer
