import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Player = () => {
  const [Songs, setSongs] = useState();

  return (
    <>
      <div className="container-player d-flex justify-content-center align-items-center">
        <button>
          <FontAwesomeIcon icon="fa-solid fa-backward-step" />
        </button>
        <button>
          <FontAwesomeIcon icon="fa-solid fa-play" />
        </button>
        <button>
          <FontAwesomeIcon icon="fa-solid fa-forward-step" />
        </button>
      </div>
    </>
  );
};
export default Player;
