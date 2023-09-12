import { TOfferProducts } from "@/types/offerProductsState ";
import { TProduct } from "@/types/products ";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TOfferProducts = {
  specialOfferProducts: [],
};

const specialOfferProductsSlice = createSlice({
  name: "specialOfferProducts",
  initialState,
  reducers: {
    addProducts(state, action: PayloadAction<TProduct[]>) {
      state.specialOfferProducts = action.payload;
    },
  },
});

export const specialOfferProductsActions = specialOfferProductsSlice.actions;

export default specialOfferProductsSlice.reducer;
