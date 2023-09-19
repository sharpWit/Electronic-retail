import ProductList from "@/components/productList/ProductList ";
import { IProduct } from "@/types/products ";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products/offers/", {
    cache: "force-cache",
  });
  const products: IProduct[] = await res.json();
  return products;
};

const Offers = async () => {
  const offersProducts: IProduct[] = await getData();

  return (
    <div>
      {offersProducts?.length ? (
        <ProductList productList={offersProducts} />
      ) : null}
    </div>
  );
};

export default Offers;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/api/products/offers/");
  const data: IProduct[] = await res.json();

  return data.map((product) => product.isOffer === true);
}
