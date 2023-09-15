import { IOfferProducts } from "@/types/offerProductsState ";
import { IProduct } from "@/types/products ";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IOfferProducts = {
  specialOfferProducts: [],
};

const specialOfferProductsSlice = createSlice({
  name: "specialOfferProducts",
  initialState,
  reducers: {
    addProducts(state, action: PayloadAction<IProduct[]>) {
      state.specialOfferProducts = action.payload;
    },
  },
});

export const specialOfferProductsActions = specialOfferProductsSlice.actions;

export default specialOfferProductsSlice.reducer;
