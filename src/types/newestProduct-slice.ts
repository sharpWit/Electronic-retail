import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProductList } from "./productList";
import { TProduct } from "./products";

const initialState: TProductList = {
  productsList: [],
};

const newestProductsSlice = createSlice({
  name: "newestProducts",
  initialState,
  reducers: {
    addProducts(state, action: PayloadAction<TProduct[]>) {
      state.productsList = action.payload;
    },
  },
});

export const newestProductsActions = newestProductsSlice.actions;

export default newestProductsSlice.reducer;
