import ProductList from "@/components/productList/ProductList ";
import { IProduct } from "@/types/products ";
import type { NextPage } from "next";

const categoryPage: NextPage<{
  products: IProduct[];
}> = ({ products }) => {
  return (
    <div>
      <ProductList productList={products} />
    </div>
  );
};

export default categoryPage;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const query = `*[_type=="product"]{
//     "category":category[0]
//   }`;
//   const products = await client.fetch(query);
//   const paths = products.map((product: ICategoryPathsParams) => ({
//     params: {
//       category: product.category,
//     },
//   }));
//   return {
//     fallback: "blocking",
//     paths,
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const category = context.params?.category;
//   const productQuery = `*[_type=='product'&& category[0]=="${category}"]`;
//   const products = await client.fetch(productQuery);

//   return {
//     props: {
//       products: products,
//     },
//   };
// };
