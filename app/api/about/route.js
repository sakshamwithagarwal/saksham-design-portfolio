// import { getNowPlaying } from "@/lib/spotify";
import { NextResponse } from "next/server";

const getAccessToken = async () => {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const token_endpoint = process.env.SPOTIFY_TOKEN_ENDPOINT;

  const basic = btoa(`${client_id}:${client_secret}`);

  const response = await fetch(token_endpoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token.toString(),
    }),
  });
  return response.json();
};

export async function GET() {
  const access_token = await getAccessToken();

  const now_playing_endpoint = process.env.NOW_PLAYING_ENDPOINT;
  const response = await fetch(now_playing_endpoint, {
    headers: {
      Authorization: `Bearer ${access_token.access_token}`,
    },
  });

  return NextResponse.json(response);
}

// export async function GET(req, res) {
//   return NextResponse.json({ message: "lalala" });
// }
