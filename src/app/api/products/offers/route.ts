import { prisma } from "@/utilities/connect ";
import { NextResponse } from "next/server";

// FETCH ALL offersProducts
export const GET = async () => {
  try {
    const offersProducts = await prisma.product.findMany({
      where: {
        isOffer: true,
      },
    });
    return new NextResponse(JSON.stringify(offersProducts), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
