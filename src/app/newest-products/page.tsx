import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { IProduct } from "@/types/products ";
import { newestProductsFn } from "@/utilities/sortByTimeStamp ";
import ProductList from "@/components/productList/ProductList ";

const NewestProduct: NextPage<{
  products: IProduct[];
}> = ({ products }) => {
  const [productsList, setProductsList] = useState<IProduct[] | []>([]);

  useEffect(() => {
    setProductsList(newestProductsFn(products));
  }, [products]);

  return (
    <div className="flex flex-wrap">
      {productsList.length ? <ProductList productList={productsList} /> : null}
    </div>
  );
};

export default NewestProduct;

// export const getStaticProps: GetStaticProps = async () => {
//   const productQuery = `*[_type=='product' && slug.current != "asus-zenbook-14-intel-core-i7-16gb-ram-512gb-ssd-14-ips-laptop"]`;
//   const products = await client.fetch(productQuery);

//   return {
//     props: {
//       products: products,
//     },
//   };
// };
