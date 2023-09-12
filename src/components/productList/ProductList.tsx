"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SortedProductsListActions } from "@/store/sortedProductList-slice ";
import Sort from "./Sort";
import Card from "../UI/card/Card";
import { TProduct } from "@/types/products ";
import { TProductListRootState } from "@/types/productList ";
import Spinner from "../UI/Spinner";

type Props = {
  products: TProduct[];
};

const ProductList: React.FC<Props> = ({ products }) => {
  const pathName = usePathname();
  let isInNewestProductsPage = pathName === "/newestProducts" ? true : false;

  const [selectedRadioBtn, setSelectedRadioBtn] = useState<string>("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      SortedProductsListActions.sortProductsList({
        productsList: products,
        sortBasedOn: selectedRadioBtn,
      })
    );
  }, [dispatch, products, selectedRadioBtn]);

  const sortedProductList = useSelector(
    (state: TProductListRootState) => state.sortedProductsList.productsList
  );

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedRadioBtn(e.currentTarget.id);
  }

  return (
    <div className="w-full xl:max-w-[2100px] mx-auto">
      {isInNewestProductsPage && products?.length ? (
        <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12">
          {products
            ? products.map((product: TProduct) => {
                return <Card key={product.id} product={product} />;
              })
            : null}
        </div>
      ) : sortedProductList && sortedProductList.length ? (
        <div>
          <Sort
            selectedBtn={selectedRadioBtn}
            onChangeSelectedBtn={onChangeHandler}
          />
          <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12">
            {sortedProductList.map((product: TProduct) => {
              return <Card key={product.id} product={product} />;
            })}
          </div>
        </div>
      ) : products ? (
        <Spinner />
      ) : (
        <p className="text-palette-mute text-center mt-8">
          هنوز هیچ محصولی در این دسته وجود ندارد. محصولات جدید به زودی اضافه
          خواهند شد.
        </p>
      )}
    </div>
  );
};

export default ProductList;
