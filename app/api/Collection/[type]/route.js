import { NextResponse } from "next/server";
import { getCollection } from "@/lib/collections";

export async function GET(req, params) {

  const response = await getCollection(params.params.type);

  return NextResponse.json({ response });
}
