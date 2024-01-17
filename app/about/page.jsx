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
  const song = await getSpotifySong();
  return <AboutCL songURL={song.songUrl} albumArt={song.albumImageUrl} />;
};

export default About;
