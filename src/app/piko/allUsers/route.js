import { NextResponse } from "next/server";
import { allUsers } from "../../../../piko/components/allUsers";

export async function GET() {
  try {
    const results = await allUsers();
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
