import { getLastPlayed } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await getLastPlayed();

  // 204 = Empty Response
  if (response.status === 204 || response.status > 400) {
    return NextResponse.json(
      {
        status: response.status,
        response: response.ok,
        isPlaying: false,
        title: "The Choice",
        albumImageUrl:
          "https://i.scdn.co/image/ab67616d0000b2734bd59e05ec76adcea635b3d4",
        songUrl: "https://open.spotify.com/album/7hMLyLcxF0LyjxI93RjYAg",
      },
      { status: 200 }
    );
  }

  const res = await response.json();
  const track = res.items[0].track;

  if (res.items === null) {
    return NextResponse.json(
      {
        status: response.status,
        response: response.ok,
        isPlaying: false,
        title: "The Choice",
        albumImageUrl:
          "https://i.scdn.co/image/ab67616d0000b2734bd59e05ec76adcea635b3d4",
        songUrl: "https://open.spotify.com/album/7hMLyLcxF0LyjxI93RjYAg",
      },
      { status: 200 }
    );
  }

//   const isPlaying = song.is_playing;
  const title = track.album.name;
  const albumImageUrl = track.album.images[0].url;
  const songUrl = track.album.external_urls.spotify;

  return NextResponse.json({ title, albumImageUrl, songUrl });
}
