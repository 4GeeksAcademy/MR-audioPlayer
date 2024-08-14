import React, { useState, useEffect } from "react";
import List from "./List";
import Player from "./Player";
import "../../styles/index.css";

const Home = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [songs, setSongs] = useState([]);
  const [songIndex, setSongIndex] = useState(0);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(
          "https://playground.4geeks.com/sound/songs"
        );
        const data = await response.json();
        setSongs(data.songs || []);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);
  const playSong = (index) => {
    setSongIndex(index);
    setCurrentSong(songs[index]);
  };
  return (
    <>
      <div className="song-list">
        <List setCurrentSong={playSong} songs={songs} />
      </div>
      <div className="player-container">
        <Player
          currentSong={currentSong}
          playSong={playSong}
          songIndex={songIndex}
          songList={songs}
        />
      </div>
    </>
  );
};

export default Home;
