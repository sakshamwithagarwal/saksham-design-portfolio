import { Footer } from "@/components";
import "./about.css";
import AboutCL from "./AboutCL";
import { getApiUrl } from "@/lib/getApiUrl";

export const dynamic = 'force-dynamic';

const getLastPlayed = async () => {
  try {
    const baseUrl = await getApiUrl();
    const response = await fetch(`${baseUrl}/api/last-played`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch song in about.");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching last played:", error);
    // Return default values on error
    return {
      albumImageUrl: "https://i.scdn.co/image/ab67616d0000b2734bd59e05ec76adcea635b3d4",
      songUrl: "https://open.spotify.com/album/7hMLyLcxF0LyjxI93RjYAg",
    };
  }
};

const About = async () => {
  const song = await getLastPlayed();
  const albumImageUrl = song.albumImageUrl;
  const songUrl = song.songUrl;

  return (
    <>
      <AboutCL songURL={songUrl} albumArt={albumImageUrl} />
      <Footer />
    </>
  );
};

export default About;
