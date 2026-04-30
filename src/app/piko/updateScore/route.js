import { NextResponse } from "next/server";
import { updateScore } from "../../../../piko/components/updateScore";

export async function POST(request) {
  try {
    const { userId, score } = await request.json();
    const results = await updateScore(userId, score);
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
