import { getNowPlaying } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false }, { status: 200 });
  }

  const song = response;

  if (song.item === null) {
    return NextResponse.json({ isPlaying: false }, { status: 200 });
  }

  const isPlaying = song.is_playing;
  const albumImageUrl = isPlaying ? song.item.album.images[0].url : "https://i.scdn.co/image/ab67616d0000b2734bd59e05ec76adcea635b3d4";
  const songUrl = isPlaying ? song.item.external_urls.spotify : "https://open.spotify.com/album/7hMLyLcxF0LyjxI93RjYAg";

  return NextResponse.json(
    { isPlaying, albumImageUrl, songUrl },
    { status: 200 }
  );
}
