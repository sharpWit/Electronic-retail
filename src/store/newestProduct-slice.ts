import { TProductList } from "@/types/productList ";
import { TProduct } from "@/types/products ";
import { createSlice } from "@reduxjs/toolkit";

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
