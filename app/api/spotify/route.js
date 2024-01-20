import { getNowPlaying } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json(
      {
        isPlaying: false,
        title: "The Choice",
        albumImageUrl:
          "https://i.scdn.co/image/ab67616d0000b2734bd59e05ec76adcea635b3d4",
        songUrl: "https://open.spotify.com/album/7hMLyLcxF0LyjxI93RjYAg",
      },
      { status: 200 }
    );
  }

  const song = await response.json();

  if (song.item === null) {
    return NextResponse.json(
      {
        isPlaying: false,
        title: "The Choice",
        albumImageUrl:
          "https://i.scdn.co/image/ab67616d0000b2734bd59e05ec76adcea635b3d4",
        songUrl: "https://open.spotify.com/album/7hMLyLcxF0LyjxI93RjYAg",
      },
      { status: 200 }
    );
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return NextResponse.json({ isPlaying, title, albumImageUrl, songUrl });
}
