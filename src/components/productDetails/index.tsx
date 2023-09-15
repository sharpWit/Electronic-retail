import Breadcrumb from "../UI/Breadcrumb";
import ImageSection from "./ImageSection";
import DetailsSection from "./DetailsSection";
import SimilarProducts from "./SimilarProducts";
import { IProduct } from "@/types/products ";
import Benefits from "../Benefits/Benefits";

interface Props {
  product: IProduct;
  products: IProduct[];
}
const ProductDetails: React.FC<Props> = ({ product, products }) => {
  const similarProductsList = products
    .filter((similarProduct) => similarProduct.slug !== product.slug)
    .slice(0, 10);

  return (
    <div className="flex flex-col">
      <Breadcrumb />
      <div className="w-full xl:max-w-[2100px] mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center md:items-start mt-8 relative">
          {/* <ImageSection imgArray={product.img} product={product} /> */}
          <DetailsSection product={product} />
        </div>
        <div className="border-2 my-8">
          <Benefits />
        </div>
        <SimilarProducts products={similarProductsList} />
      </div>
    </div>
  );
};

export default ProductDetails;
