import { NextResponse } from "next/server";
import { addInventoryItem } from "../../../../piko/components/addInventoryItem";

export async function POST(request) {
  try {
    const { userId, category, itemId } = await request.json();
    const results = await addInventoryItem(userId, category, itemId);
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
