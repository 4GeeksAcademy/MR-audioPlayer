import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.url;
      audioRef.current.play();
    }
  }, [currentSong]);

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };
  const handlenextSong = () => {};
  const handlePrevSong = () => {};

  return (
    <div className="player-container">
      {currentSong ? (
        <>
          <h2 className="current-song">{currentSong.name}</h2>
          <div className="current-song">
            <audio ref={audioRef} controls className="current-song" />
          </div>
          <div className="current-song">
            <button onClick={handlePrevSong} className="player-button">
              <FontAwesomeIcon icon={faBackward} />
            </button>
            <button onClick={handlePlayPause} className="player-button">
              <FontAwesomeIcon
                icon={audioRef.current?.paused ? faPlay : faPause}
              />
            </button>
            <button onClick={handlenextSong} className="player-button">
              <FontAwesomeIcon icon={faForward} />
            </button>
          </div>
        </>
      ) : (
        <p>Select a song to play</p>
      )}
    </div>
  );
};

export default Player;
