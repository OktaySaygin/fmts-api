import { NextResponse } from "next/server";
import { createAccount } from "../../../../piko/components/createAccount";

export async function POST(request) {
  try {
    const { email, username, password } = await request.json();
    const results = await createAccount(email, username, password);
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
