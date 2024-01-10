import "./about.css";
import AboutCL from "./AboutCL";

const getNowPlaying = async () => {
  const song = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/about`,
    { next: { revalidate: 203 }, method: "POST" }
  );

  return song.json();
};

const About = async () => {
  const song = await getNowPlaying();
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;
  // const albumImageUrl =
  //   "https://i.scdn.co/image/ab67616d0000b2738a70ce320d5c991f47f52b6f";
  // const songUrl = "https://open.spotify.com/track/7rwZD6MHLSuF2d9h5bnZPz";

  return <AboutCL songURL={songUrl} albumArt={albumImageUrl} />;
};

export default About;
