import React from "react";

function Player({ currentSong, onNext, onPrev, disabled }) {
  return (
    <div>
      <h2>Now Playing</h2>
      {disabled ? (
        <p>No song selected</p>
      ) : (
        <p>
          {currentSong.title} - {currentSong.artist}
        </p>
      )}
      <button onClick={onPrev} disabled={disabled}>
        ⏮ Prev
      </button>
      <button onClick={onNext} disabled={disabled}>
        Next ⏭
      </button>
    </div>
  );
}

export default Player;
