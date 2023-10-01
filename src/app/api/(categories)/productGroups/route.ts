import { db } from "@/utilities/connect ";
import { NextResponse } from "next/server";

// FETCH ALL CATEGORIES
export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const subCat = searchParams.get("subCat");
  try {
    const productGroups = await db.productGroup.findMany({
      where: {
        ...(subCat ? { subSlug: subCat } : null),
      },
    });
    return new NextResponse(JSON.stringify(productGroups), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
