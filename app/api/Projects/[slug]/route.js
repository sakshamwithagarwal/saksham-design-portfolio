import { NextResponse } from "next/server";
import { request } from "graphql-request";
import { getSingleProject } from "@/lib/projects";

export async function GET(req, params) {
  const response = await getSingleProject(params.params.slug);

  return NextResponse.json({ response });
}
