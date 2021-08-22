import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Header } from "./components/ui/header";

import { Product } from "./pages/product";
import { routes } from "./routes";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path={routes.product} component={Product} exact />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
