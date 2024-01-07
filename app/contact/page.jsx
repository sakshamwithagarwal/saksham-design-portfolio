import "./contact.css";
import ContactCL from "./Contact";
import { getNowPlaying } from "../../lib/spotify";

const Contact = async () => {
  // const song = await getNowPlaying();
  // const albumImageUrl = song.item.album.images[0].url;
  // const songUrl = song.item.external_urls.spotify;
  const albumImageUrl =
    "https://i.scdn.co/image/ab67616d0000b2738a70ce320d5c991f47f52b6f";
  const songUrl = "https://open.spotify.com/track/7rwZD6MHLSuF2d9h5bnZPz";
  // console.log(albumImageUrl, songUrl);
  return <ContactCL />;
};

export default Contact;
