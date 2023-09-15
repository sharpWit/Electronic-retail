import Link from "next/link";
import Image from "next/image";
import ProductPrice from "../ProductPrice";
import { IProduct } from "@/types/products ";

interface Props {
  product: IProduct;
}

const CarouselBoxCard = ({ product }: Props) => {
  return (
    <div className="w-full h-full px-2 my-2">
      <Link
        href={`/${product.slug}/${product.subSlug}/${product.groupTitle}/${product.enTitle}`}
        className="flex flex-col w-full p-3 shadow-lg backdrop-filter backdrop-blur-[10px] bg-palette-card/80 rounded-md"
      >
        <div className="text-center flex-grow">
          {product?.img[0] && (
            <Image
              src={product?.img[0]}
              alt={product.title}
              width={200}
              height={185}
              className="object-contain hover:scale-105 transition-transform !p-2"
            />
          )}
          {product.isOffer ? (
            <span className="block absolute top-2 right-2">
              <Image
                src="/images/discount-icon/discount.webp"
                width={40}
                height={40}
                alt="discount-icon"
              />
            </span>
          ) : null}
        </div>
        <p className="truncate">{product.title}</p>
        <ProductPrice
          price={product.price}
          discount={product.discount}
          isInSlider={true}
        />
      </Link>
    </div>
  );
};

export default CarouselBoxCard;
