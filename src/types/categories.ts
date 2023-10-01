import { IProduct } from "./products";

export interface ICategories {
  id: string;
  createdAt: string;
  name: string;
  title: string;
  desc?: string;
  icon?: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  href: string;
  styles?: IStyleCat;
  // products: IProduct[];
}

export interface IStyleCat {
  backgroundColor: string;
  flexDirection: string;
  paddingInline: string;
  paddingBlock: string;
  textAlign?: string;
  gridRow: string;
  gridColumn: string;
}
