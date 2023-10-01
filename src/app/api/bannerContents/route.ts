import { db } from "@/utilities/connect ";
import { NextResponse } from "next/server";

// FETCH ALL bannerContent
export const GET = async () => {
  try {
    const banners = await db.bannerContent.findMany({});
    return new NextResponse(JSON.stringify(banners), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
