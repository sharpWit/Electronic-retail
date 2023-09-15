import { IProductList } from "@/types/productList ";
import { IProduct } from "@/types/products ";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IProductList = {
  productsList: [],
};

const newestProductsSlice = createSlice({
  name: "newestProducts",
  initialState,
  reducers: {
    addProducts(state, action: PayloadAction<IProduct[]>) {
      state.productsList = action.payload;
    },
  },
});

export const newestProductsActions = newestProductsSlice.actions;

export default newestProductsSlice.reducer;
