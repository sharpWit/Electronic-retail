import { TProduct } from "./products";

export type TProductList = {
  productsList: TProduct[] | [];
};

export type TProductListRootState = {
  sortedProductsList: TProductList;
};
