import type { NextPage } from "next";
import ProductList from "../../../../components/productList/ProductList";
import { IProduct } from "@/types/products ";

const brandPage: NextPage<{
  products: IProduct[];
}> = ({ products }) => {
  return (
    <div>
      <ProductList productList={products} />
    </div>
  );
};

export default brandPage;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const query = `*[_type=="product"]{
//     "category":category[0],
//     "subCategory":category[1],
//     "title":category[2],
//   }`;
//   const products = await client.fetch(query);
//   const paths = products.map((product: ITitlePathsParams) => ({
//     params: {
//       category: product.category,
//       subCategory: product.subCategory,
//       title: product.title,
//     },
//   }));
//   return {
//     fallback: "blocking",
//     paths,
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const title = context.params?.title;
//   const subCategory = context.params?.subCategory;
//   const productQuery = `*[_type=='product'&& category[1]=="${subCategory}" && category[2]=="${title}"]`;

//   const products = await client.fetch(productQuery);

//   return {
//     props: {
//       products: products,
//     },
//   };
// };
