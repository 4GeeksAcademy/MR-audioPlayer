import React, { useEffect, useRef } from "react";

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
  return (
    <div>
      {currentSong ? (
        <>
          <h2>Now Playing: {currentSong.name}</h2>
          <audio ref={audioRef} controls />
          <button onClick={handlePlayPause}>Play/Pause</button>
          <button onClick={() => handleSkip("prev")}>Previous</button>
          <button onClick={() => handleSkip("next")}>Next</button>
        </>
      ) : (
        <p>Select a song to play</p>
      )}
    </div>
  );
};

export default Player;
