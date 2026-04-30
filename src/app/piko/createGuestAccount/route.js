import { NextResponse } from "next/server";
import { createGuestAccount } from "../../../../piko/components/createGuestAccount";

export async function POST() {
  try {
    const results = await createGuestAccount();
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
