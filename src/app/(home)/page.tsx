"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { specialOfferProductsActions } from "@/store/specialOfferProducts-slice ";
import dynamic from "next/dynamic";
import Benefits from "@/components/Benefits/Benefits ";
import Carousel from "@/components/carousel/Carousel ";
import useOferredProducts from "./useOferredProducts";
import Spinner from "@/components/UI/Spinner ";
import { newestProductsFn } from "@/utilities/sortByTimeStamp ";
import { newestProductsActions } from "@/store/newestProduct-slice ";
import useProducts from "./useProducts";

const Offers = dynamic(() => import("../../components/Offers/Offers"));
const Category = dynamic(() => import("../../components/category/Category"));
const Newest = dynamic(() => import("../../components/newest/Newest"));
const Brands = dynamic(() => import("../../components/brands/Brands"));
const Banners = dynamic(() => import("../../components/banners/Banner"), {
  ssr: false,
});

const Home = () => {
  const { products: offeredProducts, isLoading: isLoadingOffered } =
    useOferredProducts();
  // const { products, isLoading } = useProducts();
  const { products, isLoading } = useProducts();
  const dispatch = useDispatch();

  useEffect(() => {
    //add products to offers list
    if (offeredProducts?.length)
      dispatch(specialOfferProductsActions.addProducts(offeredProducts));
    //add products to newest list
    if (products?.length) {
      newestProductsFn(products);
      dispatch(newestProductsActions.addProducts(products));
    }
  }, [dispatch, products, offeredProducts]);

  if (isLoading || isLoadingOffered) return <Spinner />;

  return (
    <div>
      <Carousel />
      <Benefits />
      <Offers />
      <Category />
      <Newest />
      <Banners />
      <Brands />
    </div>
  );
};

export default Home;
