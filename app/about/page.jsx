import { Footer } from "@/components";
import "./about.css";
import AboutCL from "./AboutCL";

const getNowPlaying_ = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/spotify`,
    { cache: "no-store" }
  );

  if(!response.ok) {
    throw new Error('Failed to fetch song in about.');
  }

  return response.json();
};

const About = async () => {
  const song = await getNowPlaying_();
  const albumImageUrl = song.albumImageUrl;
  const songUrl = song.songUrl;

  return <>
  <AboutCL songURL={songUrl} albumArt={albumImageUrl} />
  <Footer />
  </>
};

export default About;
