import { db } from "@/utilities/connect ";
import { NextResponse } from "next/server";

// FETCH ALL Products
export const GET = async () => {
  try {
    const products = await db.product.findMany();
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
