import { TProduct } from "@/types/products ";

export const sortByExpensive = (
  product1: TProduct,
  product2: TProduct
): number => {
  return product2.price - product1.price;
};

export const sortByCheapest = (
  product1: TProduct,
  product2: TProduct
): number => {
  return product1.price - product2.price;
};
