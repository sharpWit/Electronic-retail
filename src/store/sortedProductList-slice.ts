import { TProduct } from "@/types/products ";
import { TProductList } from "@/types/productList ";
import { sortByCheapest, sortByExpensive } from "@/utilities/sortByCost ";
import { sortByPoPularity } from "@/utilities/sortByPopularity ";
import { newestProductsFn } from "@/utilities/sortByTimeStamp ";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TProductList = {
  productsList: [],
};

const SortedProductsListSlice = createSlice({
  name: "sortedProductsList",
  initialState,
  reducers: {
    sortProductsList(
      state,
      action: PayloadAction<{ productsList: TProduct[]; sortBasedOn: string }>
    ) {
      switch (action.payload.sortBasedOn) {
        case "all":
          state.productsList = action.payload.productsList;
          break;
        case "newestProducts": {
          state.productsList = newestProductsFn(state.productsList);
          break;
        }
        case "popular": {
          state.productsList = state.productsList.sort(sortByPoPularity);
          break;
        }
        case "cheapest": {
          state.productsList = state.productsList.sort(sortByCheapest);
          break;
        }
        case "expensive": {
          state.productsList = state.productsList.sort(sortByExpensive);
          break;
        }
      }
    },
  },
});
export const SortedProductsListActions = SortedProductsListSlice.actions;

export default SortedProductsListSlice.reducer;
