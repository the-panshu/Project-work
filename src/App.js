import React, { useState } from "react";
import AddSong from "./components/AddSong";
import SongList from "./components/SongList";
import Player from "./components/Player";

function App() {
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const addSong = (song) => {
    setSongs([...songs, song]);
  };

  const nextSong = () => {
    setCurrentIndex((prev) => (prev + 1 < songs.length ? prev + 1 : prev));
  };

  const prevSong = () => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : 0));
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🎵 My Music Playlist</h1>
      <AddSong onAdd={addSong} />
      <SongList songs={songs} currentIndex={currentIndex} />
      <Player
        currentSong={songs[currentIndex]}
        onNext={nextSong}
        onPrev={prevSong}
        disabled={songs.length === 0}
      />
    </div>
  );
}

export default App;
