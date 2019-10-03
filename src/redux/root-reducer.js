import { combineReducers } from "redux"

// reducers
import apiState from "./api-state-reducer.js"
import breeds from "./breed-reducer"
import images from "./image-reducer"
import chartData from "./chart-data-reducer"
import errorMessage from "./error-message-reducer"

export const originalState = {
  apiState: false,
  errorMessage: "",
  breeds: [],
  images: {},
  chartData: []
}

const rootReducer = combineReducers({
  apiState,
  breeds,
  errorMessage,
  images,
  chartData
})

export default rootReducer
