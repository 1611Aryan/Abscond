import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import GlobalStyle from "./GlobalStyle"
import { BrowserRouter } from "react-router-dom"
import store from "./Redux/store"
import { Provider } from "react-redux"
import { SocketProvider } from "./Context/socket.provider"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Provider store={store}>
        <SocketProvider>
          <App />
        </SocketProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
