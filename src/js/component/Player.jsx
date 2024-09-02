import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

const baseUrl = "https://playground.4geeks.com";

const Player = ({ currentSong, playSong, songIndex, songList }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      const fullUrl = `${baseUrl}${currentSong.url}`;
      console.log("Playing song from URL:", fullUrl);
      audioRef.current.src = fullUrl;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.error("Error playing song:", error));
    }
  }, [currentSong]);

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleNextSong = () => {
    let nextIndex = songIndex + 1;
    if (nextIndex >= songList.length) {
      nextIndex = 0;
    }
    playSong(nextIndex);
  };

  const handlePrevSong = () => {
    let prevIndex = songIndex - 1;
    if (prevIndex < 0) {
      prevIndex = songList.length - 1;
    }
    playSong(prevIndex);
  };

  return (
    <>
      <div className="footer">
        <h2 className="current-song">
          {currentSong ? currentSong.name : "Select a song to play"}
        </h2>
        <div className="audio-container">
          <audio ref={audioRef} />
        </div>
        <div className="current-song">
          <button onClick={handlePrevSong} className="player-button">
            <FontAwesomeIcon icon={faBackward} />
          </button>
          <button onClick={handlePlayPause} className="player-button">
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </button>
          <button onClick={handleNextSong} className="player-button">
            <FontAwesomeIcon icon={faForward} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Player;
