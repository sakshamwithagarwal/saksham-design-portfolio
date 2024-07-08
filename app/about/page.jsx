import { Footer } from "@/components";
import "./about.css";
import AboutCL from "./AboutCL";

const getLastPlayed = async () => {
 const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/last-played`, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch song in about.");
  }

  return response.json();
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
