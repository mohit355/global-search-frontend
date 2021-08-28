import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import "./index.css";
import searchReducer from "./store/reducers/Search";
import App from "./App";

const rootReducer = combineReducers({
  search: searchReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
