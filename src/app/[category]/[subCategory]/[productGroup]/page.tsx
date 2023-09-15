import { Suspense } from "react";
import Loading from "@/app/loading ";
import Breadcrumb from "@/components/UI/Breadcrumb ";
import ProductList from "@/components/productList/ProductList ";
import { IProduct } from "@/types/products ";

const getData = async (
  category: string,
  subCategory: string,
  productGroup: string
) => {
  const res = await fetch(
    `http://localhost:3000/api/products/${category}/${subCategory}/${productGroup}/`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

type Props = {
  params: { category: string; subCategory: string; productGroup: string };
};

const SubCategoryPage = async ({ params }: Props) => {
  const products: IProduct[] = await getData(
    params.category,
    params.subCategory,
    params.productGroup
  );

  return (
    <div>
      <Breadcrumb />
      <Suspense fallback={<Loading />}>
        <ProductList productList={products} />
      </Suspense>
    </div>
  );
};

export default SubCategoryPage;
