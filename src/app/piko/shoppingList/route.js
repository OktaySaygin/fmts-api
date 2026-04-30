import { NextResponse } from "next/server";
import { shoppingList } from "../../../../piko/components/shoppingList";

export async function GET() {
  try {
    const results = await shoppingList();
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
