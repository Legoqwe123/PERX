export const localStorageMiddleware = (state) => (next) => (action) => {
  const result = next(action);

  if (result.type.includes("cart/")) {
    localStorage.setItem("cart", JSON.stringify(state.getState().cart));
  }

  return result;
};
