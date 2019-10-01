import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./root-reducer"

import { originalState } from "./root-reducer"

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension")
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

function configureStore(initialState = originalState) {
  return createStore(rootReducer, initialState, bindMiddleware([thunk]))
}

export default configureStore
