import { getNowPlaying } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function POST() {
  const data = await getNowPlaying();

  return NextResponse.json(data);
}

export async function GET(req, res) {
  return NextResponse.json({ message: "lalala" });
}