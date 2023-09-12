import Loading from "@/app/loading ";
import Breadcrumb from "@/components/UI/Breadcrumb ";
import ProductList from "@/components/productList/ProductList ";
import SubmenuSubCategory from "@/components/productList/SubmenuSubCategory ";
import { TProduct } from "@/types/products ";
import { Suspense } from "react";

const getData = async (category: string, subCategory: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products/${category}/${subCategory}`,
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
  params: { category: string; subCategory: string };
};

const SubCategoryPage = async ({ params }: Props) => {
  const products: TProduct[] = await getData(
    params.category,
    params.subCategory
  );

  const category = params.category;
  const subCategory = params.subCategory;

  return (
    <div>
      <Breadcrumb />
      <Suspense fallback={<Loading />}>
        <SubmenuSubCategory cat={category} subCat={subCategory} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ProductList products={products} />
      </Suspense>
    </div>
  );
};

export default SubCategoryPage;
