import React from "react";

function SongList({ songs, currentIndex }) {
  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {songs.map((song, index) => (
          <li
            key={index}
            style={{ fontWeight: index === currentIndex ? "bold" : "normal" }}
          >
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongList;
