import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Account from "./Components/Account";
import "./App.css";
function App() {
  return (
    <>
      <Provider store={store}>
        <Account />
      </Provider>
    </>
  );
}

export default App;
