import React, { useState } from "react";

function AddSong({ onAdd }) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && artist.trim()) {
      onAdd({ title, artist });
      setTitle("");
      setArtist("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Song title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        required
      />
      <button type="submit">Add Song</button>
    </form>
  );
}

export default AddSong;
