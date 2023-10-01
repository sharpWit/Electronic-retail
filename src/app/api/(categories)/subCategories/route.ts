import { db } from "@/utilities/connect ";
import { NextResponse } from "next/server";

// FETCH ALL CATEGORIES
export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const cat = searchParams.get("cat");
  try {
    const subCategories = await db.subCategory.findMany({
      where: {
        ...(cat ? { slug: cat } : null),
      },
    });
    return new NextResponse(JSON.stringify(subCategories), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
