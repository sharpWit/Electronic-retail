import Loading from "@/app/loading ";
import NotFoundPage from "@/app/not-found ";
import Breadcrumb from "@/components/UI/Breadcrumb ";
import ProductList from "@/components/productList/ProductList ";
import SubmenuCategory from "@/components/productList/SubmenuCategory ";
import { ICategories } from "@/types/categories ";
import { IProduct } from "@/types/products ";
import { Suspense } from "react";

type Props = {
  params: { category: string };
};

async function getData(category: string) {
  try {
    const products: IProduct[] = await fetch(
      `http://localhost:3000/api/products/${category}`,
      { next: { revalidate: 60 } }
    ).then((res) => res.json());
    return products;
  } catch (error) {
    console.error(error);
  }
}

const MainCategories = async ({ params }: Props) => {
  const category = params.category;
  const products: IProduct[] | undefined = await getData(category);

  return (
    <div>
      <Breadcrumb />
      <SubmenuCategory cat={category} />
      <Suspense fallback={<Loading />}>
        {products?.length ? (
          <ProductList productList={products} />
        ) : (
          <NotFoundPage />
        )}
      </Suspense>
    </div>
  );
};

export default MainCategories;

export async function generateStaticParams(): Promise<{ category: string }[]> {
  try {
    const categories: ICategories[] = await fetch(
      "http://localhost:3000/api/categories/"
    ).then((res) => res.json());

    return categories.map((category) => ({
      category: category.href,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}
