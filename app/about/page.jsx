import "./about.css";
import AboutCL from "./AboutCL";
import { baseUrl } from "../page";

const getNowPlaying = async () => {
  const song = await fetch(`${baseUrl}/api/SpotifyNowPlaying`, {
    method: "POST",
  });

  return song.json();
}

const About = async () => {

  const song = await getNowPlaying();
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;
  return <AboutCL songURL={songUrl} albumArt={albumImageUrl} />;
};

export default About;
