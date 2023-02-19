import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";
import transactionSlice from "./transactionSlice";

export default configureStore({
  reducer: {
    productSlice,
    userSlice,
    cartSlice,
    transactionSlice,
  },
});
