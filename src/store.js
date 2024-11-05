import { createStore } from "@reduxjs/toolkit";
import { accountReducer } from "./reducer";

const store = createStore(
  accountReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
