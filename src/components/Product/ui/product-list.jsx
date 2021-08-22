import { ProductItem } from "./product-item";

export const ProductList = ({ products }) => {
  return (
    <ul className="shop-product__list">
      {products.map((product) => (
        <ProductItem product={product} key={product.name} />
      ))}
    </ul>
  );
};
