import { Suspense } from "react";
import Loading from "../loading";
import SubmenuCategory from "@/components/productList/SubmenuCategory ";
import ProductList from "@/components/productList/ProductList ";
import Breadcrumb from "@/components/UI/Breadcrumb ";
import { IProduct } from "@/types/products ";

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
  const products: IProduct[] = await getData(params.category);
  const category = params.category;

  return (
    <div>
      <Breadcrumb />
      <Suspense fallback={<Loading />}>
        <SubmenuCategory cat={category} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ProductList productList={products} />
      </Suspense>
    </div>
  );
};

export default CategoryPage;
