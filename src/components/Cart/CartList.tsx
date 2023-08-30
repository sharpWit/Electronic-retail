import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { ICartProduct, ICartRootState } from "@/types/cart ";

const CartList = () => {
  const cartItems = useSelector((state: ICartRootState) => state.cart.items);
  return (
    <div>
      <div className="w-full xl:max-w-[2100px] mx-auto">
        {cartItems.length
          ? cartItems.map((cartItem: ICartProduct) => {
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
