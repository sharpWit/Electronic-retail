import { TProductDetails } from "./products";

export type TCartProduct = {
  image: any;
  name: string;
  slug: string;
  price: number;
  discount?: number;
  brand: string;
  category: string[];
  starRating: number;
  isOffer?: boolean;
  details?: TProductDetails[];
  registerDate?: string;
  quantity: number;
  totalPrice: number;
};

export type TCartUI = {
  cartBoxIsVisible: boolean;
};

export type TCart = {
  items: TCartProduct[];
  totalQuantity: number;
  totalAmount: number;
};

//RootState type => use for state type in useSelector hook

export type TCartUiRootState = {
  cartUi: TCartUI;
};
export type TCartRootState = {
  cart: TCart;
};
