import { useSelector } from "react-redux";

import { ButtonBack } from "../ui/button-back";

import { CartInfo } from "./ui/cart-info";
import { CartList } from "./ui/cart-list";

export const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <section className="shop-cart container-95">
      <ButtonBack />

      <h2 className="shop-cart__title">Содержание заказа</h2>

      {cart.length > 0 ? (
        <>
          <CartList />
          <CartInfo />
        </>
      ) : null}
    </section>
  );
};
