import ProductList from "@/components/productList/ProductList ";
import { IProduct } from "@/types/products ";
import type { NextPage } from "next";

const offers: NextPage<{
  products: IProduct[];
}> = ({ products }) => {
  return (
    <div>
      <ProductList productList={products} />
    </div>
  );
};

export default offers;

// export const getStaticProps: GetStaticProps = async () => {
//   const productQuery = `*[_type=='product'&& isOffer==true]`;
//   const products = await client.fetch(productQuery);
//   return {
//     props: {
//       products: products,
//     },
//   };
// };
