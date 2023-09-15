import { IProduct } from "@/types/products ";
import CarouselBox from "../UI/CarouselBox/CarouselBox";
import CarouselBoxCard from "../UI/CarouselBox/CarouselBoxCard";

interface Props {
  products: IProduct[];
}
const SimilarProducts: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <CarouselBox title="similarProducts" full={true}>
        {products.map((product) => (
          <CarouselBoxCard key={product.slug} product={product} />
        ))}
      </CarouselBox>
    </div>
  );
};

export default SimilarProducts;
