import { useDispatch } from "react-redux";

import { createUrlForStatic } from "../../../constants/api";
import { actions } from "../../../store/slices/cart";
import { Amount } from "../../ui/amount";
import { ButtonClose } from "../../ui/button-close";

export const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleClickButtonAdd = () => {
    dispatch(actions.addProduct(product));
  };

  const handleClickButtonRemove = () => {
    dispatch(actions.removeProduct(product));
  };

  const handleClickButtonClose = () => {
    dispatch(actions.removeProductFully(product));
  };

  const handleChange = (value) => {
    if (value < 1000) {
      dispatch(actions.updateProduct({ ...product, counter: +value }));
    }
  };

  return (
    <li className="shop-cart__list-item">
      <div className="shop-cart__item-left">
        <img
          src={createUrlForStatic(product.image)}
          alt={product.name}
          className="shop-cart__item-img"
          width="75"
          height="75"
        />
        <p className="shop-cart__item-name"> {product.name}</p>
      </div>
      <div className="shop-cart__item-right">
        <Amount
          className="h-50"
          value={product.counter}
          handleClickAdd={handleClickButtonAdd}
          handleClickRemove={handleClickButtonRemove}
          handleChange={handleChange}
        />
        <p className="shop-cart__item-price">{product.price} $</p>

        <div>
          <ButtonClose
            className="shop-cart__item-button-close"
            handleClick={handleClickButtonClose}
          />
        </div>
      </div>
    </li>
  );
};