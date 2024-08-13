import React, { useState } from "react";
import List from "./List";
import Player from "./Player";
import "../../styles/index.css";

const Home = () => {
  const [currentSong, setCurrentSong] = useState(null);
  console.log("Home: setCurrentSong", setCurrentSong); // verificando usestate
  return (
    <>
      <div className="song-list">
        <List setCurrentSong={setCurrentSong} />
      </div>
      <div className="player-container">
        <Player currentSong={currentSong} />
      </div>
    </>
  );
};

export default Home;
