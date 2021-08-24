import { createSlice } from "@reduxjs/toolkit";
import isEmpty from "lodash/isEmpty";

import { createUrlAPI } from "../../constants/api";

const initialProductValues = {
  loading: false,
  error: {},
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialProductValues,
  reducers: {
    fetchProductRequested(state) {
      state.loading = true;
    },
    fetchProductSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const actions = productSlice.actions;

export const fetchProduct = (dealers) => async (dispatch) => {
  dispatch(actions.fetchProductRequested());

  const fetchUrl = isEmpty(dealers)
    ? createUrlAPI("/goods")
    : createUrlAPI(["/goods", `/?dealers=${dealers.join(",")}`]);

  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();

    dispatch(actions.fetchProductSuccess(data));
  } catch (error) {
    dispatch(actions.fetchProductFailure(error));
  }
};
