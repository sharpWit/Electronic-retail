"use client";

import dynamic from "next/dynamic";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { specialOfferProductsActions } from "@/store/specialOfferProducts-slice ";
import Benefits from "@/components/Benefits/Benefits ";
import Carousel from "@/components/carousel/Carousel ";
import { newestProductsFn } from "@/utilities/sortByTimeStamp ";
import { newestProductsActions } from "@/types/newestProduct-slice ";
import { TProduct } from "@/types/products ";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/UI/Spinner ";

const Offers = dynamic(() => import("../../components/Offers/Offers"));
const Category = dynamic(() => import("../../components/category/Category"));
const Newest = dynamic(() => import("../../components/newest/Newest"));
const Brands = dynamic(() => import("../../components/brands/Brands"));
const Banners = dynamic(() => import("../../components/banners/Banner"), {
  ssr: false,
});

const Home = () => {
  // const {
  //   isLoading,
  //   data: products,
  //   error,
  // } = useQuery({
  //   queryKey: ["product"],
  //   queryFn: getProducts,
  // });

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   //add products to offers list
  //   const offersProducts = products?.filter((item) => item.discount);
  //   dispatch(specialOfferProductsActions.addProducts(offersProducts));

  //   //add products to newest list
  //   const sortedProductsByTimeStamp = newestProductsFn(products);
  //   dispatch(newestProductsActions.addProducts(sortedProductsByTimeStamp));
  // }, [dispatch, products]);

  // if (isLoading) return <Spinner />;

  return (
    <div>
      {/* <ul>
        {products?.map((product) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul> */}
      {/* <Carousel />
      <Benefits />
      <Offers />
      <Category />
      <Newest />
      <Banners />
      <Brands /> */}
      <Category />
    </div>
  );
};

export default Home;
