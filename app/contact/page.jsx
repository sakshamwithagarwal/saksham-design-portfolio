import "./contact.css";
import ContactCL from "./Contact";

const getNowPlaying = async () => {
  const song = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/SpotifyNowPlaying`, {
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
