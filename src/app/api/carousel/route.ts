import { db } from "@/utilities/connect ";
import { NextResponse } from "next/server";

// FETCH ALL sliders
export const GET = async () => {
  try {
    const sliders = await db.slider.findMany({});
    return new NextResponse(JSON.stringify(sliders), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
