import Breadcrumb from "@/components/UI/Breadcrumb ";
import ProductList from "@/components/productList/ProductList ";
import SubmenuCategory from "@/components/productList/SubmenuCategory ";
import { TProduct } from "@/types/products ";
import { Suspense } from "react";
import Loading from "../loading";

const getData = async (category: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${category}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

type Props = {
  params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
  const products: TProduct[] = await getData(params.category);
  const category = params.category;

  return (
    <div>
      <Breadcrumb />
      <Suspense fallback={<Loading />}>
        <SubmenuCategory cat={category} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ProductList products={products} />
      </Suspense>
    </div>
  );
};

export default CategoryPage;
