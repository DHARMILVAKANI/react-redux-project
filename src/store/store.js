import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productsSlice
  },
});

export default store;
