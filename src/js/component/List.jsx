import React, { useEffect, useState } from "react";
import "../../styles/index.css";

const List = ({ setCurrentSong, songs }) => {
  return (
    <div className="song-list">
      {songs.map((song, index) => (
        <li style={{ listStyleType: "none" }} key={song.id}>
          <div>
            <button
              onClick={() => setCurrentSong(index)}
              className="song-style"
            >
              {song.id} {song.name} -
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default List;
