import React, { useEffect, useState } from "react";

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
  return (
    <div>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <button onClick={() => setCurrentSong(song)}>{song.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
