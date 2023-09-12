import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { TCartProduct, TCartRootState } from "@/types/cart ";

const CartList = () => {
  const cartItems = useSelector((state: TCartRootState) => state.cart.items);
  return (
    <div>
      <div className="w-full xl:max-w-[2100px] mx-auto">
        {cartItems.length
          ? cartItems.map((cartItem: TCartProduct) => {
              return (
                <CartItem key={cartItem.slug.current} product={cartItem} />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default CartList;
