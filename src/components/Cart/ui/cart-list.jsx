import { useSelector } from "react-redux";
import { CartItem } from "./cart-item";

export const CartList = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <ul className="shop-cart__list">
      {cart.map((product) => (
        <CartItem product={product} key={product.name} />
      ))}
    </ul>
  );
};
