import React, { useEffect, useState } from "react";
import "../../styles/index.css";

const List = ({ setCurrentSong }) => {
  const [songs, setSongs] = useState([]);

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
  console.log("List: setCurrentSong", setCurrentSong); // comprobar fetch listado de canciones
  return (
    <div className="song-list">
      {songs.map((song) => (
        <li style={{ listStyleType: "none" }} key={song.id}>
          <div>
            <button onClick={() => setCurrentSong(song)} className="song-style">
              {song.id} {song.name} -
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default List;
