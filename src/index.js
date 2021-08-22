import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { DealersContext } from "./context/dealers-context";

import "./assests/style/style.sass";

function startApp(dealers) {
  ReactDOM.render(
    <DealersContext.Provider value={dealers}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DealersContext.Provider>,
    document.getElementById("root")
  );
}

window.app = {
  startApp,
};
