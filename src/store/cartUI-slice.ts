import { TCartUI } from "@/types/cart ";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TCartUI = {
  cartBoxIsVisible: false,
};

const cartUiSlice = createSlice({
  name: "cartUi",
  initialState,
  reducers: {
    toggleCartBox(state, action: PayloadAction<boolean>) {
      state.cartBoxIsVisible = action.payload;
    },
  },
});

export const cartUiActions = cartUiSlice.actions;

export default cartUiSlice.reducer;
