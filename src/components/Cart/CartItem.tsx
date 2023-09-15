"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMinusSm, HiOutlinePlusSm, HiOutlineTrash } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import ProductPrice from "../UI/ProductPrice";
import { ICartRootState } from "@/types/cart ";
import { IProduct } from "@/types/products ";

interface Props {
  product: IProduct;
}
const CartItem: React.FC<Props> = ({ product }) => {
  const productQuantity = useSelector(
    (state: ICartRootState) =>
      state.cart.items.find((item) => item.slug === product.slug)?.quantity
  );
  const [counter, setCounter] = useState(productQuantity);
  const dispatch = useDispatch();

  function increment(product: IProduct) {
    setCounter((prev) => ++prev!);
    dispatch(cartActions.addItemToCart({ product: product, quantity: 1 }));
  }

  function decrement(slug: string) {
    setCounter((prev) => --prev!);
    dispatch(cartActions.removeItemFromCart(slug));
  }

  function onInputNumberChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (+e.currentTarget.value >= 1 && +e.currentTarget.value <= 10) {
      setCounter(+e.currentTarget.value);
    }
  }
  return (
    <div className="flex items-center flex-wrap sm:my-4 sm:py-4 px-2 border-b-2">
      <div className="lg:w-1/2 sm:min-w-[290px]">
        <Link
          href={`/${product.slug}/${product.subSlug}/${product.groupTitle}/${product.enTitle}`}
        >
          <a className="flex flex-wrap sm:flex-nowrap justify-center items-center flex-grow">
            <div className="sm:min-w-[100px] md:min-w-[130px]">
              <Image
                src={product.img[0]}
                width={200}
                height={200}
                alt={product.title}
                className="object-contain"
              />
            </div>
            <div
              className="flex-grow text-sm font-normal mb-2 sm:mb-0 mx-2 w-full"
              style={{ direction: "rtl" }}
            >
              {product.title}
            </div>
          </a>
        </Link>
      </div>
      <div className="flex flex-wrap flex-grow md:items-center mb-4 sm:mb-0">
        <div className="flex-grow my-2 sm:my-0">
          <div className="flex items-center justify-start lg:justify-center cursor-pointer">
            <div className="p-2" onClick={() => increment(product)}>
              <HiOutlinePlusSm style={{ fontSize: "1rem" }} />
            </div>
            <input
              className="inline-block w-[65px] rtl:pr-7 ltr:pl-7 py-2 mx-1 border-[1px] border-gray-400"
              type="number"
              min={1}
              max={10}
              value={counter}
              onChange={onInputNumberChangeHandler}
            />
            {counter === 1 ? (
              <div onClick={() => decrement(product.slug)} className="p-1">
                <HiOutlineTrash style={{ fontSize: "1.3rem", color: "red" }} />
              </div>
            ) : (
              <div onClick={() => decrement(product.slug)} className="p-1">
                <HiMinusSm style={{ fontSize: "1rem" }} />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col flex-grow font-normal rtl:mr-1 lrt:ml-1">
          <p>قیمت کل</p>
          <ProductPrice
            price={product.price * counter!}
            discount={product.discount}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
