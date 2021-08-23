import { useDispatch, useSelector } from "react-redux";

import { createUrlForStatic } from "../../../constants/api";
import { actions } from "../../../store/slices/cart";
import { Amount } from "../../ui/amount";

export const ProductItem = ({ product }) => {
  const productInCart = useSelector((state) =>
    state.cart.find((item) => product.name === item.name)
  );

  const dispatch = useDispatch();

  const handleClickButtonAdd = () => {
    dispatch(actions.addItem(product));
  };

  const handleClickButtonRemove = () => {
    dispatch(actions.removeItem(product));
  };

  return (
    <li className="product__item">
      <img
        src={createUrlForStatic(product.image)}
        alt={product.name}
        className="product__item-img"
        width="200"
        height="200"
      />
      <p className="product__item-name">{product.name}</p>
      <p className="product__item-price">{product.price} $</p>

      {productInCart ? (
        <Amount
          value={productInCart.counter}
          handleClickAdd={handleClickButtonAdd}
          handleClickRemove={handleClickButtonRemove}
          disabled
        />
      ) : (
        <button
          className="product__item-button"
          type="button"
          onClick={handleClickButtonAdd}>
          Добавить в корзину
        </button>
      )}
    </li>
  );
};
