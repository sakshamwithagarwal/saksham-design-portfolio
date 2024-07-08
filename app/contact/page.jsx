import "./contact.css";
import ContactCL from "./Contact";
// import { getNowPlaying } from "@/lib/spotify";

const getLastPlayed = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/last-played`, {
     method: "GET",
     cache: "no-store",
   });
 
   if (!response.ok) {
     throw new Error("Failed to fetch song in about.");
   }
 
   return response.json();
 };

const Contact = async () => {
  const song = await getLastPlayed();
  const albumImageUrl = song.albumImageUrl;
  const songUrl = song.songUrl;

  return <ContactCL albumArt={albumImageUrl} songURL={songUrl} />;
};

export default Contact;
