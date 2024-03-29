"use client";

import { useSelector } from "react-redux";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import Link from "next/link";
import Card from "../UI/card/Card";
import SectionTitle from "../UI/SectionTitle";
import { IProduct } from "@/types/products ";

const Newest = () => {
  const { width } = useWindowDimensions();
  let numProductToShow = width >= 1536 ? 12 : 8;

  const newestProducts: IProduct[] = useSelector(
    (state: any) => state.newestProductsList.productsList
  );

  return (
    <div className="mx-auto my-4 md:my-8 flex flex-col xl:max-w-[2130px]">
      <SectionTitle title={"محصولات جدید"} />

      <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12 ">
        {newestProducts
          ? newestProducts
              .slice(0, numProductToShow)
              .map((product: IProduct) => {
                return <Card key={product.title} product={product} />;
              })
          : null}
      </div>

      <div className="text-center">
        <Link
          href="/newestProducts"
          className="inline-block py-3 px-8 md:px-12 mt-4 text-sm md:text-base bg-palette-primary text-palette-side rounded-xl shadow-lg"
        >
          دیدن تمام محصولات جدید
        </Link>
      </div>
    </div>
  );
};

export default Newest;
