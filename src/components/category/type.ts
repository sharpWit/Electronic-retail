export interface TCategories {
  id: string;
  name: string;
  title: string;
  desc?: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  href: string;
  styles?: TStyleCat;
}

export interface TStyleCat {
  backgroundColor: string;
  flexDirection: string;
  paddingInline: string;
  paddingBlock: string;
  textAlign?: string;
  gridRow: string;
  gridColumn: string;
}
