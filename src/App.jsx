import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Header } from "./components/ui/header";

import { Product } from "./pages/product";
import { Cart } from "./pages/cart";
import { routes } from "./routes";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path={routes.product} component={Product} exact />
          <Route path={routes.cart} component={Cart} exact />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
