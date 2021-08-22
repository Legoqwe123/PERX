import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { DealersContext } from "./context/dealers-context";

import "./assests/style/style.sass";

function startApp(dealers) {
  ReactDOM.render(
    <DealersContext.Provider value={dealers}>
      <StrictMode>
        <App />
      </StrictMode>
    </DealersContext.Provider>,
    document.getElementById("root")
  );
}

window.app = {
  startApp,
};
