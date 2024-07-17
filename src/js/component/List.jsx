import React from "react";

const List = ({ songs, onSongSelect }) => {
  return (
    <>
      <div className="container-list d-flex  align-items-start">
        <ul className="hover-song">
          {songs.map((song, index) => (
            <li key={index} onClick={() => onSongSelect(song)}>
              {song.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default List;
