import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utilities/auth ";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}
