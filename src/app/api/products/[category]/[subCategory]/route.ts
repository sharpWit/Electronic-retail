import { prisma } from "@/utilities/connect ";
import { NextResponse } from "next/server";

// FETCH ALL PRODUCTS
export const GET = async (
  request: Request,
  { params }: { params: { subCategory: string } }
) => {
  const subCat = params.subCategory;

  try {
    const products = await prisma.product.findMany({
      where: {
        ...(subCat ? { subSlug: subCat } : null),
      },
    });
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
