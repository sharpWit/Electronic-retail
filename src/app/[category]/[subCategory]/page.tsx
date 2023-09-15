import { Suspense } from "react";
import Loading from "@/app/loading ";
import SubmenuSubCategory from "@/components/productList/SubmenuSubCategory ";
import ProductList from "@/components/productList/ProductList ";
import Breadcrumb from "@/components/UI/Breadcrumb ";
import { IProduct } from "@/types/products ";

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
  const products: IProduct[] = await getData(
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
        <ProductList productList={products} />
      </Suspense>
    </div>
  );
};

export default SubCategoryPage;
