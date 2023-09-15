import ProductList from "@/components/productList/ProductList ";
import { IProduct } from "@/types/products ";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products/offers/", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
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
