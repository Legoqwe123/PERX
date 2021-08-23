import { withLoading } from "../../../HOC/with-loading";
import { ProductItem } from "./product-item";

export const ProductList = withLoading(({ products }) => {
  return (
    <ul className="product__list">
      {products.map((product) => (
        <ProductItem product={product} key={product.name} />
      ))}
    </ul>
  );
}, "product.loading");
