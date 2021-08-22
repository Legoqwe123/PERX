import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { productSlice } from "./slices/product";
import { cartSlice } from "./slices/cart";
import { localStorageMiddleware } from "./middleware/local-storage";

export const store = configureStore({
  reducer: combineReducers({
    product: productSlice.reducer,
    cart: cartSlice.reducer,
  }),
  middleware: [thunk, localStorageMiddleware],
});
