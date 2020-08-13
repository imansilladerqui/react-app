import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import "./index.scss";
import "font-awesome/css/font-awesome.min.css";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from "./store/reducers";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
