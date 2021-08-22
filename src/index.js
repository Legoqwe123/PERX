import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { DealersContext } from "./context/dealers-context";
import { store } from "./store/store";

import "./assests/style/style.sass";

function startApp(dealers) {
  ReactDOM.render(
    <DealersContext.Provider value={dealers}>
      <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </StrictMode>
    </DealersContext.Provider>,
    document.getElementById("root")
  );
}

window.app = {
  startApp,
};
