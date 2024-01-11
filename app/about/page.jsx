import "./about.css";
import { getNowPlaying } from "@/lib/spotify";
import AboutCL from "./AboutCL";

function isEmpty(value) {
  for (let prop in value) {
    if (value.hasOwnProperty(prop)) return false;
  }
  return true;
}

const About = async () => {
  const song = await getNowPlaying();
  const albumImageUrl = !isEmpty(song)
    ? song.item.album.images[0].url
    : "https://i.scdn.co/image/ab67616d0000b2738a70ce320d5c991f47f52b6f";
  const songUrl = !isEmpty(song)
    ? song.item.external_urls.spotify
    : "https://open.spotify.com/track/7rwZD6MHLSuF2d9h5bnZPz";

  return <AboutCL songURL={songUrl} albumArt={albumImageUrl} />;
};

export default About;
