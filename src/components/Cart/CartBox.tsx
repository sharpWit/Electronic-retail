import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "@/store/cartUI-slice ";
import { useExchangeRateGBPToIRR } from "@/hooks/useExchangeRateGBPToIRR ";
import { changeNumbersFormatEnToFa } from "@/utilities/changeNumbersFormatEnToFa ";
import CartItem from "./CartItem";
import { TCartRootState } from "@/types/cart ";
import { TUserInfoRootState } from "@/types/user ";

const CartBox = () => {
  const dispatch = useDispatch();

  const cartItemQuantity = useSelector(
    (state: TCartRootState) => state.cart.totalQuantity
  );

  const cartTotalAmount = useSelector(
    (state: TCartRootState) => state.cart.totalAmount
  );

  const cartItems = useSelector((state: TCartRootState) => state.cart.items);

  const userInfo = useSelector(
    (state: TUserInfoRootState) => state.userInfo.userInformation
  );

  function onCloseCartBoxHandler() {
    dispatch(cartUiActions.toggleCartBox(false));
  }

  const irPrice = useExchangeRateGBPToIRR(cartTotalAmount);

  return (
    <div className="hidden lg:flex flex-col absolute top-full rtl:left-0 min-h-[15rem] max-h-[25rem] w-[20rem] bg-palette-card z-[110] shadow-md rounded-lg overflow-auto">
      <div className="relative">
        <header className="flex items-center justify-between sticky top-0 left-0 right-0 text-sm font-normal z-10 bg-palette-card p-2">
          <span>
            {changeNumbersFormatEnToFa(cartItemQuantity)}
            کالا
          </span>
          <span onClick={onCloseCartBoxHandler}>
            <Link href="/cart" className="text-cyan-500">
              مشاهدۀ سبد خرید
            </Link>
          </span>
        </header>
        <hr className="mt-2" />
        <div>
          <>
            {cartItems.length ? (
              cartItems.map((item) => {
                return <CartItem key={item.slug.current} product={item} />;
              })
            ) : (
              <p className="mt-20 text-center text-palette-mute font-normal">
                سبد خرید شما خالی است
              </p>
            )}
          </>
        </div>
        {cartItems.length ? (
          <div className="flex items-center sticky bottom-0 left-0 right-0 bg-palette-card font-normal py-3 px-4">
            <div className="flex flex-col flex-grow rtl:ml-2">
              <p className="text-sm">مبلغ قابل پرداخت</p>
              <p className="self-end text-sm font-bold">{`تومان ${irPrice}`}</p>
            </div>
            {!userInfo ? (
              <div onClick={onCloseCartBoxHandler}>
                <Link
                  href={"/login"}
                  className="py-2 px-3 bg-palette-primary text-[12px] text-palette-side rounded-lg"
                >
                  ورود و ثبت سفارش
                </Link>
              </div>
            ) : (
              <div onClick={onCloseCartBoxHandler}>
                <Link
                  href={"/cart"}
                  className="py-2 px-10 bg-palette-primary text-[12px] text-palette-side rounded-lg"
                >
                  ثبت سفارش
                </Link>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CartBox;
