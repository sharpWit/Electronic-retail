import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/cartUI-slice";
import { useExchangeRateGBPToIRR } from "../../hooks/useExchangeRateGBPToIRR";
import CartItem from "./CartItem";
import { changeNumbersFormatEnToFa } from "../../utilities/changeNumbersFormatEnToFa";
import { ICartRootState } from "@/types/cart ";
import { IUserInfoRootState } from "@/types/user ";

const CartBox = () => {
  const dispatch = useDispatch();

  const cartItemQuantity = useSelector(
    (state: ICartRootState) => state.cart.totalQuantity
  );

  const cartTotalAmount = useSelector(
    (state: ICartRootState) => state.cart.totalAmount
  );

  const cartItems = useSelector((state: ICartRootState) => state.cart.items);

  const userInfo = useSelector(
    (state: IUserInfoRootState) => state.userInfo.userInformation
  );

  function onCloseCartBoxHandler() {
    dispatch(cartUiActions.toggleCartBox(false));
  }

  const irPrice = useExchangeRateGBPToIRR(cartTotalAmount);

  return (
    <div className="hidden lg:flex flex-col absolute top-full rtl:left-0 ltr:right-0 min-h-[15rem] max-h-[25rem] w-[20rem] bg-palette-card z-[110] shadow-md rounded-lg overflow-auto">
      <div className="relative">
        <header className="flex items-center justify-between sticky top-0 left-0 right-0 text-sm font-normal z-10 bg-palette-card p-2">
          <span className="flex justify- items-centerbetween gap-2">
            <div>{changeNumbersFormatEnToFa(cartItemQuantity)}</div>
            <p>کالا</p>
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
                return <CartItem key={item.id} product={item} />;
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
            <div className="flex flex-col flex-grow ltr:mr-2 rtl:ml-2">
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
