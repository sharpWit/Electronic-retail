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
      <SubmenuCategory cat={category} />
      <Suspense fallback={<Loading />}>
        <ProductList productList={products} />
      </Suspense>
    </div>
  );
};

export default CategoryPage;

// export async function generateStaticParams() {
//   const categories: ICategories[] = await fetch(
//     "http://localhost:3000/api/categories/"
//   ).then((res) => res.json());

//   return categories.map((category) => ({
//     category: category.href,
//   }));
// }

// export async function generateStaticParams(): Promise<{ category: string }[]> {
//   try {
//     const res = await fetch("http://localhost:3000/api/categories");
//     if (!res.ok) {
//       throw new Error(`Fetch failed with status: ${res.status}`);
//     }
//     const categories: ICategories[] = await res.json();
//     return categories.map((category) => ({
//       category: category.href,
//     }));
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// }
