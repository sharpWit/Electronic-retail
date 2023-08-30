import Link from "next/link";
import { useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Transition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "@/store/cartUI-slice ";
import { changeNumbersFormatEnToFa } from "@/utilities/changeNumbersFormatEnToFa ";
import CartBox from "./CartBox";
import { ICartRootState, ICartUiRootState } from "@/types/cart ";

const Basket = () => {
  const dispatch = useDispatch();
  const showCartBox = useSelector(
    (state: ICartUiRootState) => state.cartUi.cartBoxIsVisible
  );
  const cartItemQuantity = useSelector(
    (state: ICartRootState) => state.cart.totalQuantity
  );

  const nodeRef = useRef<HTMLDivElement>(null);

  function onMouseHoverHandler(toggle: boolean) {
    dispatch(cartUiActions.toggleCartBox(toggle));
  }

  return (
    <div
      className="relative"
      onMouseOver={() => onMouseHoverHandler(true)}
      onMouseOut={() => onMouseHoverHandler(false)}
    >
      <Link
        href="/cart"
        className="relative flex items-center rtl:md:pr-6 rtl:md:border-r-2 rtl:md:border-r-slate-300  z-50"
      >
        <AiOutlineShoppingCart style={{ fontSize: "1.6rem" }} />
        <span className="absolute -top-3 -right-[0.3rem] rtl:md:right-[1rem]  flex items-center justify-center w-5 h-5 rtl:pt-[0.1rem] rounded-full bg-palette-primary text-[0.75rem] leading-3 text-white shadow-lg">
          {changeNumbersFormatEnToFa(cartItemQuantity)}
        </span>
      </Link>
      <Transition
        nodeRef={nodeRef}
        in={showCartBox}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          return (
            <div ref={nodeRef} className="z-[100]">
              <CartBox />
            </div>
          );
        }}
      </Transition>
    </div>
  );
};

export default Basket;
