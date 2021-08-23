import { useLayoutEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import isEmpty from "lodash/isEmpty";
import intersectionBy from "lodash/intersectionBy";

import { Header } from "./components/ui/header";

import { Product } from "./pages/product";
import { Cart } from "./pages/cart";
import { routes } from "./routes";
import { actions } from "./store/slices/cart";
import { useDealersContext } from "./context/dealers-context";
import { createUrlAPI } from "./constants/api";

function App() {
  const dispatch = useDispatch();
  const { dealers } = useDealersContext();

  const setCartOutLocalStorageAtInizializationApp = async () => {
    const dataCartLocalStorage = JSON.parse(localStorage.getItem("cart"));

    if (dataCartLocalStorage && dataCartLocalStorage.length > 0) {
      if (!isEmpty(dealers)) {
        const response = await fetch(
          createUrlAPI(["/goods", `/?dealers=${dealers.join(",")}`])
        );

        const products = await response.json();

        const productsByFilterDealers = intersectionBy(
          dataCartLocalStorage,
          products,
          "name"
        );

        dispatch(actions.setCart(productsByFilterDealers));

        return;
      }

      dispatch(actions.setCart(dataCartLocalStorage));
    }
  };

  useLayoutEffect(() => {
    setCartOutLocalStorageAtInizializationApp();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path={routes.product} component={Product} exact />
        <Route path={routes.cart} component={Cart} exact />
      </Switch>
    </Router>
  );
}

export default App;
