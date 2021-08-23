import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { routes } from "../../../routes";
import { actions } from "../../../store/slices/cart";

export const CartInfo = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const totalSum = useSelector((state) =>
    state.cart.reduce((acc, item) => acc + item.counter * item.price, 0)
  );

  const handleSumbit = () => {
    setTimeout(() => {
      dispatch(actions.clearAllCart());

      history.push(routes.product);
    }, 500);
  };

  return (
    <div className="cart__info">
      <p className="cart__info-price">
        К оплате :<span>{totalSum.toFixed(2)}$</span>
      </p>
      <button
        type="button"
        className="cart__info-button"
        onClick={handleSumbit}>
        Оформить заказ
      </button>
    </div>
  );
};
