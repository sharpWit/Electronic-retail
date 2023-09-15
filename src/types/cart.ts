import { IBrand, IProductDetails } from "./products";

export interface ICartProduct {
  id: string;
  title: string;
  enTitle: string;
  img: any;
  price: number;
  discount?: number;
  category: string[];
  rate: number;
  slug: string;
  subSlug: string;
  groupTitle: string;
  isOffer?: boolean;
  brand: IBrand;
  details?: IProductDetails[];
  registerDate?: string;
  quantity: number;
  totalPrice: number;
}

export interface ICartUI {
  cartBoxIsVisible: boolean;
}

export interface ICart {
  items: ICartProduct[];
  totalQuantity: number;
  totalAmount: number;
}

//RootState interface => use for state interface in useSelector hook

export interface ICartUiRootState {
  cartUi: ICartUI;
}
export interface ICartRootState {
  cart: ICart;
}
