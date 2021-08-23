import { createSlice } from "@reduxjs/toolkit";

const initialCartValues = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartValues,
  reducers: {
    addItem(state, action) {
      const productIndexInCart = state.findIndex(
        (itemCart) => itemCart.name === action.payload.name
      );

      if (productIndexInCart >= 0) {
        state[productIndexInCart].counter++;

        return;
      }

      state.push({ ...action.payload, counter: 1 });
    },

    removeItem(state, action) {
      const productIndexInCart = state.findIndex(
        (itemCart) => itemCart.name === action.payload.name
      );

      const shouldRemoveProduct = state[productIndexInCart].counter <= 1;

      if (shouldRemoveProduct) {
        return state.filter((product) => product.name !== action.payload.name);
      }

      state[productIndexInCart].counter--;
    },

    setCart(_, action) {
      return action.payload;
    },

    updateItem(state, action) {
      const productIndexInCart = state.findIndex(
        (itemCart) => itemCart.name === action.payload.name
      );

      state[productIndexInCart] = action.payload;
    },

    removeItemFully(state, action) {
      return state.filter((product) => product.name !== action.payload.name);
    },

    clearAllCart() {
      return [];
    },
  },
});

export const actions = cartSlice.actions;
