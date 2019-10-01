import { combineReducers } from "redux"

// reducers
import apiState from "./api-state-reducer.js"
import breeds from "./breed-reducer"
import images from "./image-reducer"
import errorMessage from "./error-message-reducer"

export const originalState = {
  apiState: { isLoading: false },
  errorMessage: "",
  breeds: [],
  images: {}
}

const rootReducer = combineReducers({
  apiState,
  breeds,
  errorMessage,
  images
})

export default rootReducer
