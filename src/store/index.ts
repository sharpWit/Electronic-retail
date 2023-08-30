import SortedProductsListReducer from "./sortedProductList-slice";
import sideNavBarReducer from "./sideNavBar-slice";
import activeMenuItemReducer from "./activeMenuItem-slice";
import megaMenuReducer from "./megaMenu-slice";
import userInfoReducer from "./user-slice";
import cartUiReducer from "./cartUI-slice";
import cartSliceReducer from "./cart-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cartUi: cartUiReducer,
    cart: cartSliceReducer,
    userInfo: userInfoReducer,
    megaMenu: megaMenuReducer,
    activeMenuItem: activeMenuItemReducer,
    sideNavBar: sideNavBarReducer,
    sortedProductsList: SortedProductsListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export default store;
