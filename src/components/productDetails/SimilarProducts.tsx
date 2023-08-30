import { IProduct } from "@/types/products ";
import CarouselBox from "../CarouselBox/CarouselBox";
import CarouselBoxCard from "../CarouselBox/CarouselBoxCard";

interface Props {
  products: IProduct[];
}
const SimilarProducts: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <CarouselBox title="similarProducts" full={true}>
        {products.map((product) => (
          <CarouselBoxCard key={product.slug.current} product={product} />
        ))}
      </CarouselBox>
    </div>
  );
};

export default SimilarProducts;
