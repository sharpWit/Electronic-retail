import { TDropDown } from "@/types/dropDown ";
import { TSideNavBar } from "@/types/sidebar ";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TSideNavBar = {
  isSidebarOpen: false,
  isNavbarOpen: false,
  dropDownList: [],
};

const sideNavBarSlice = createSlice({
  name: "sideNavBar",
  initialState,
  reducers: {
    openSidebar(state) {
      state.isSidebarOpen = true;
    },

    openNavbar(state) {
      state.isNavbarOpen = true;
    },

    closeSidebar(state) {
      state.isSidebarOpen = false;
    },

    closeNavbar(state) {
      state.isSidebarOpen = false;
      state.isNavbarOpen = false;
    },

    setSidebarEntries(state, action: PayloadAction<TDropDown[]>) {
      state.dropDownList = action.payload;
    },
  },
});

export const sideNavBarActions = sideNavBarSlice.actions;

export default sideNavBarSlice.reducer;
