// export type TSlug = {
//   _type: string;
//   current: string;
// };

// export type TImage = {
//   _key: string;
//   _type: "image";
//   asset: {
//     _ref: string;
//     _type: "reference";
//   };
// };

// export type IProduct {
//   id: number;
//   image: any;
//   name: string;
//   slug: TSlug;
//   price: number;
//   discount?: number;
//   details?: IProductDetails[];
//   brand: string;
//   category: string[];
//   isOffer?: boolean;
//   registerDate?: string;
//   timeStamp?: number;
//   starRating: number;
// }

export interface TProduct {
  id: string;
  created_at?: string;
  modified_at?: string;
  deleted_at?: string;
  title: string;
  enTitle: string;
  desc?: string;
  img: string;
  price: number;
  isOffer?: boolean;
  discount?: number;
  rate?: number;
  slug: string;
  subSlug: string;
  groupTitle: string;
  brand: TBrand;
  details?: TProductDetails[];
}
export interface TProductDetails {
  size?: string;
  weight?: string;
  color?: string;
  ports?: string;
  wireless?: boolean;
  bluetooth?: boolean;
}

export interface TBrand {
  id: number;
  name: string;
  desc: string;
  logo: string;
  slug: string;
}
