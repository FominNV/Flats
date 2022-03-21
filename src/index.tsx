import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom"
import App from "./components/App/App"

import { store } from "./store"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
