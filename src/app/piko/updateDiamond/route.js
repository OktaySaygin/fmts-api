import { NextResponse } from "next/server";
import { updateDiamond } from "../../../../piko/components/updateDiamond";

export async function POST(request) {
  try {
    const { userId, diamond } = await request.json();
    const results = await updateDiamond(userId, diamond);
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
