import "./about.css";
import { getNowPlaying } from "../../lib/spotify";
import AboutCL from "./AboutCL";

const About = async () => {
  const song = await getNowPlaying();
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;
  // console.log(albumImageUrl, songUrl);
  return <AboutCL songURL={songUrl} albumArt={albumImageUrl} />
};

export default About;
