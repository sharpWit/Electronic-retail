import { IFavorite } from "@/types/favorite ";
import { IProduct } from "@/types/products ";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IFavorite = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<IProduct>) {
      state.items.push({
        ...action.payload,
      });
    },
    removeFromFavorite(state, action: PayloadAction<string>) {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },
    clearCart(state) {
      state = initialState;
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice.reducer;
