import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import { store } from '../src/store/store'
import HowardsApp from "./HowardsApp";
import "./styles/style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HowardsApp />
    </Provider>
  </React.StrictMode>
);
