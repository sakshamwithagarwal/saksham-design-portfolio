import "./contact.css";
import ContactCL from "./Contact";
import { baseUrl } from "../page";

const getNowPlaying = async () => {
  const song = await fetch(`${baseUrl}/api/SpotifyNowPlaying`, {
    method: "POST",
  });

  return song.json();
};

const Contact = async () => {
  const song = await getNowPlaying();
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return <ContactCL albumArt={albumImageUrl} songURL={songUrl} />;
};

export default Contact;
