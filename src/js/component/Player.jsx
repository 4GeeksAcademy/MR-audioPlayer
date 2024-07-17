import React, { useEffect, useState, useRef } from "react";

const Player = () => {
  const [Songs, setSongs] = useState();

  return (
    <>
      <div className="container-player d-flex justify-content-center align-items-center">
        <button className="buttonFowardBackward">
          <FontAwesomeIcon icon="fa-solid fa-backward-step" />
        </button>
        <button className="buttonPlay">
          <FontAwesomeIcon icon="fa-solid fa-play" />
          <FontAwesomeIcon icon="fa-solid fa-pause" />
        </button>
        <button className="buttonFowardBackward">
          <FontAwesomeIcon icon="fa-solid fa-forward-step" />
        </button>
      </div>
    </>
  );
};
export default Player;
