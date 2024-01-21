import { NextResponse } from "next/server";
import { request } from "graphql-request";

export async function GET(req, { params }) {
  try {
    const response  = await request(
      "https://ap-south-1.cdn.hygraph.com/content/clha5gtcw11sx01taepog266q/master",
      `{
        term(where: {slug: "${params.slug}"}) {
            id
            name
            content {
                html
            }
        }
        }`
    );
    return NextResponse.json(response );
  } catch (error) {}
}
