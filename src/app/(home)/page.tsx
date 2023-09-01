import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { specialOfferProductsActions } from "@/store/specialOfferProducts-slice ";
import Benefits from "@/components/Benefits/Benefits ";
import Carousel from "@/components/carousel/Carousel ";
import { newestProductsFn } from "@/utilities/sortByTimeStamp ";
import { IProduct } from "@/types/products ";
import { newestProductsActions } from "@/types/newestProduct-slice ";

// const Offers = dynamic(() => import("../../components/Offers/Offers"));
// const Category = dynamic(() => import("../../components/category/Category"));
// const Newest = dynamic(() => import("../../components/newest/Newest"));
// const Brands = dynamic(() => import("../../components/brands/Brands"));
// const Banners = dynamic(() => import("../../components/banners/Banner"), {
//   ssr: false,
// });

// const Home: NextPage<{ products: IProduct[] }> = ({ products }) => {
const Home = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   //add products to offers list
  //   const offersProducts = products.filter((item) => item.discount);
  //   dispatch(specialOfferProductsActions.addProducts(offersProducts));

  //   //add products to newest list
  //   const sortedProductsByTimeStamp = newestProductsFn(products);
  //   dispatch(newestProductsActions.addProducts(sortedProductsByTimeStamp));
  // }, [dispatch, products]);
  return (
    <div>
      <Carousel />
      {/* <Benefits /> */}
      {/* <Offers /> */}
      {/* <Category /> */}
      {/* <Newest /> */}
      {/* <Banners /> */}
      {/* <Brands /> */}
    </div>
  );
};

export default Home;

// export const getStaticProps = async () => {
//   const productQuery = `*[_type=='product']`;
//   const products = await client.fetch(productQuery);

//   return {
//     props: {
//       products,
//     },
//   };
// };
