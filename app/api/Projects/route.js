import { getAllProjects } from "@/lib/projects";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await getAllProjects();
  return NextResponse.json({ response });
}
