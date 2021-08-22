import isEmpty from "lodash/isEmpty";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProduct } from "../../store/slices/product";
import { ProductList } from "./ui/product-list";

export const ProductPage = () => {
  const productData = useSelector((state) => {
    return state.product;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="product container-95">
      {!isEmpty(productData.products) && isEmpty(productData.error) && (
        <ProductList products={productData.products} />
      )}
    </section>
  );
};
