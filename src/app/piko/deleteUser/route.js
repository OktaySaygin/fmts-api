import { NextResponse } from "next/server";
import { deleteUser } from "../../../../piko/components/deleteUser";

export async function POST(request) {
  try {
    const { id } = await request.json();
    const results = await deleteUser(id);
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while deleting user." },
      { status: 500 }
    );
  }
}
