import { TProduct } from "@/types/products ";

export const sortByPoPularity = (
  product1: TProduct,
  product2: TProduct
): number => {
  return product2.starRating - product1.starRating;
};
