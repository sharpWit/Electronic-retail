import { TProduct } from "@/types/products ";

export function getTimeStamp(date: string) {
  const creationProductDate = new Date(date);
  return creationProductDate.getTime();
}

export const sortByTimeStamp = (
  product1: TProduct,
  product2: TProduct
): number => {
  if (product2?.timeStamp && product1?.timeStamp) {
    return product2?.timeStamp - product1?.timeStamp;
  }
  return 0;
};

export const newestProductsFn = (products: TProduct[]) => {
  const productsWithTimeStamp = products?.map((product) => {
    return {
      ...product,
      timeStamp: getTimeStamp(product.registerDate!),
    };
  });
  return productsWithTimeStamp?.sort(sortByTimeStamp);
};
