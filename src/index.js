import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./components/app/App"
import configureStore from "./redux/configure-store"


const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
