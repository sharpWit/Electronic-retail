import { TActiveMenuItem } from "@/types/activeMenuItem ";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TActiveMenuItem = {
  activeMenuItemIndex: 0,
  activeMenuItemText: "",
};

const activeMenuItemSlice = createSlice({
  name: "activeMenuItem",
  initialState,
  reducers: {
    setActiveMenuItemIndex(state, action: PayloadAction<number>) {
      state.activeMenuItemIndex = action.payload;
    },
    setActiveMenuItemText(state, action: PayloadAction<string>) {
      state.activeMenuItemText = action.payload;
    },
  },
});

export const activeMenuItemActions = activeMenuItemSlice.actions;

export default activeMenuItemSlice.reducer;
