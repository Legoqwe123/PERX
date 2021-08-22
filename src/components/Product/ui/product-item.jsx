import React from "react";
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
    dispatch(actions.addProduct(product));
  };

  const handleClickButtonRemove = () => {
    dispatch(actions.removeProduct(product));
  };

  return (
    <li className="shop-product__item">
      <img
        src={createUrlForStatic(product.image)}
        alt={product.name}
        className="shop-product__item-img"
        width="200"
        height="200"
      />
      <p className="shop-product__item-name">{product.name}</p>
      <p className="shop-product__item-price">{product.price} $</p>

      {productInCart ? (
        <Amount
          value={productInCart.counter}
          handleClickAdd={handleClickButtonAdd}
          handleClickRemove={handleClickButtonRemove}
        />
      ) : (
        <button
          className="shop-product__item-button"
          type="button"
          onClick={handleClickButtonAdd}>
          Добавить в корзину
        </button>
      )}
    </li>
  );
};
