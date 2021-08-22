import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Badge } from "./badge";

import cartIcon from "../../assests/icons/shopping-basket.svg";
import { routes } from "../../routes";
import { actions } from "../../store/slices/cart";

export const Header = () => {
  const dispatch = useDispatch();
  const counterProductInCart = useSelector((state) =>
    state.cart.reduce((acc, item) => acc + item.counter, 0)
  );

  useLayoutEffect(() => {
    const dataCartLocalStorage = JSON.parse(localStorage.getItem("cart"));

    if (dataCartLocalStorage && dataCartLocalStorage.length > 0) {
      dispatch(actions.setCart(dataCartLocalStorage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="shop-header">
      <div className="shop-header__wrapper container-95">
        <p className="shop-header__text">Интернет магазин</p>

        <Link to={routes.cart}>
          <Badge content={counterProductInCart}>
            <img src={cartIcon} width="40" height="40" alt="Cart" />
          </Badge>
        </Link>
      </div>
    </header>
  );
};
