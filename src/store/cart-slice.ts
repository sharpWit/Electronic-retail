import { TCart } from "@/types/cart ";
import { TProduct } from "@/types/products ";
import { calculateDiscountPercentage } from "@/utilities/calculateDiscountPercentage ";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TCart = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(
      state: TCart,
      action: PayloadAction<{ product: TProduct; quantity: number }>
    ) {
      const newItem = action.payload.product;

      const existingItem = state.items.find(
        (item) => item.slug.current === newItem.slug.current
      );

      state.totalQuantity = state.totalQuantity + action.payload.quantity;

      state.totalAmount =
        state.totalAmount +
        action.payload.quantity *
          (action.payload.product.discount
            ? calculateDiscountPercentage(
                action.payload.product.price,
                action.payload.product.discount
              )
            : action.payload.product.price);

      if (!existingItem) {
        const totalPrice =
          (newItem.discount
            ? calculateDiscountPercentage(newItem.price, newItem.discount)
            : newItem.price) * action.payload.quantity;

        state.items.push({
          ...newItem,
          quantity: action.payload.quantity,
          totalPrice,
        });
      } else {
        const totalPrice =
          existingItem.totalPrice +
          (existingItem.discount
            ? calculateDiscountPercentage(
                existingItem.price,
                existingItem.discount
              ) * action.payload.quantity
            : existingItem.price * action.payload.quantity);

        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice = totalPrice;
      }
    },

    removeItemFromCart(
      state: TCart,
      action: PayloadAction<string> //slug.current as payload
    ) {
      const productSlug = action.payload;
      const existingItem = state.items.find(
        (item) => item.slug.current === productSlug
      );

      state.totalQuantity--;

      state.totalAmount =
        state.totalAmount -
        (existingItem?.discount
          ? calculateDiscountPercentage(
              existingItem.price,
              existingItem.discount
            )
          : existingItem?.price)!;

      if (existingItem?.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.slug.current !== productSlug
        );
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice -
          (existingItem?.discount
            ? calculateDiscountPercentage(
                existingItem.price,
                existingItem.discount
              )
            : existingItem?.price)!;
      }
    },

    clearCart(state) {
      state = initialState;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
