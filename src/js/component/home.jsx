import React, { useState } from "react";
import List from "./List";
import Player from "./Player";

const Home = () => {
  const [currentSong, setCurrentSong] = useState(null);
  console.log("Home: setCurrentSong", setCurrentSong);
  return (
    <>
      <List setCurrentSong={setCurrentSong} />
      <Player currentSong={currentSong} />
    </>
  );
};

export default Home;
