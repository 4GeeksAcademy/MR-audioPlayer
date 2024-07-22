import React, { useState } from "react";
import List from "./List";
import Player from "./Player";

const Home = () => {
  const [currentSong, setCurrentSong] = useState(null);
  return (
    <>
      <List />
      <Player />
    </>
  );
};

export default Home;
