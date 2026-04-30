import { NextResponse } from "next/server";
import { login } from "../../../../piko/components/login";

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    const results = await login(username, password);
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
