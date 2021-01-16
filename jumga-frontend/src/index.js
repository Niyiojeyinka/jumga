import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";
import ReactDOM, { render } from "react-dom";
import { positions, Provider as RAProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};
ReactDOM.render(
  <React.StrictMode>
    <RAProvider template={AlertTemplate} {...options}>
      <Provider store={store}>
        <App />
      </Provider>
    </RAProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
