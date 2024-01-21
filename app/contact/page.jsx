import "./contact.css";
import ContactCL from "./Contact";
import { getNowPlaying } from "@/lib/spotify";

const getNowPlaying_ = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/spotify`,
    { cache: "no-store" }
  );

  if(!response.ok) {
    throw new Error('Failed to fetch song in contact.');
  }

  return response.json();
};

const Contact = async () => {
  const song = await getNowPlaying_();
  const albumImageUrl = song.albumImageUrl;
  const songUrl = song.songUrl;

  return <ContactCL albumArt={albumImageUrl} songURL={songUrl} />;
};

export default Contact;
