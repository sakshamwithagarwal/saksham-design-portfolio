import { getNowPlaying } from "@/lib/spotify";
import "./about.css";
import AboutCL from "./AboutCL";

const getSpotifySong = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/spotify`
  );
  if (!response.ok) {
    throw new Error(`Error while fetching song from spotify.`);
  }

  return response.json();
};

const About = async () => {
  const song = await getNowPlaying();
  const isPlaying = song.is_playing;
  const albumImageUrl = isPlaying
    ? song.item.album.images[0].url
    : "https://i.scdn.co/image/ab67616d0000b2734bd59e05ec76adcea635b3d4";
  const songUrl = isPlaying
    ? song.item.external_urls.spotify
    : "https://open.spotify.com/album/7hMLyLcxF0LyjxI93RjYAg";
  return <AboutCL songURL={songUrl} albumArt={albumImageUrl} />;
};

export default About;
