import { createSlice } from "@reduxjs/toolkit";

import { findIndexItemByName, deleteItemByName } from "../../utils/utils";

const initialCartValues = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartValues,
  reducers: {
    addItem(state, action) {
      const productIndexInCart = findIndexItemByName(state, action.payload);

      if (productIndexInCart >= 0) {
        state[productIndexInCart].counter++;

        return;
      }

      state.push({ ...action.payload, counter: 1 });
    },

    removeItem(state, action) {
      const productIndexInCart = findIndexItemByName(state, action.payload);

      if (state[productIndexInCart].counter <= 1) {
        return deleteItemByName(state, action.payload);
      }

      state[productIndexInCart].counter--;
    },

    setCart(_, action) {
      return action.payload;
    },

    updateItem(state, action) {
      const productIndexInCart = findIndexItemByName(state, action.payload);

      state[productIndexInCart] = action.payload;
    },

    removeItemFully(state, action) {
      return deleteItemByName(state, action.payload);
    },

    clearAllCart() {
      return [];
    },
  },
});

export const actions = cartSlice.actions;
