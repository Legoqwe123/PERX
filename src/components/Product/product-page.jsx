import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProduct } from "../../store/slices/product";
import { ProductList } from "./ui/product-list";
import { useDealersContext } from "../../context/dealers-context";

export const ProductPage = () => {
  const { dealers } = useDealersContext();

  const productData = useSelector((state) => {
    return state.product;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(dealers));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="product container-95">
      <ProductList products={productData.products} />
    </section>
  );
};
