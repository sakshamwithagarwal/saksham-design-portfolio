import "./contact.css";
import ContactCL from "./Contact";
import { getNowPlaying } from "../../lib/spotify";

const Contact = async () => {
  const song = await getNowPlaying();
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;
  // console.log(albumImageUrl, songUrl);
  return <ContactCL albumArt={albumImageUrl} songURL={songUrl} />;
};

export default Contact;
