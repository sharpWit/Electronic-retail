import { TProduct } from "./products";
export type TFavorite = {
  items: TProduct[];
};

export type TFavoriteRootState = {
  favorite: TFavorite;
};
