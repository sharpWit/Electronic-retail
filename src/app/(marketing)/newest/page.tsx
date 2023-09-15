"use client";

import { useState, useEffect } from "react";
import Spinner from "@/components/UI/Spinner ";
import ProductList from "@/components/productList/ProductList ";
import { newestProductsFn } from "@/utilities/sortByTimeStamp ";
import { IProduct } from "@/types/products ";
import useProducts from "@/app/(home)/useProducts ";

const NewestProduct = () => {
  const [productsList, setProductsList] = useState<IProduct[] | []>([]);

  const { products, error, isLoading } = useProducts();

  useEffect(() => {
    if (products) {
      setProductsList(newestProductsFn(products));
    }
  }, [products]);

  if (isLoading) return <Spinner />;

  // if (error instanceof Error) {
  //   return <div>An error occurred: {error.message}</div>;
  // }

  return (
    <div className="flex flex-wrap">
      {productsList.length ? <ProductList productList={productsList} /> : null}
    </div>
  );
};

export default NewestProduct;
