import React, { useState } from "react";

function ShortenForm({ onShorten }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onShorten(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="shorten-form">
      <input
        type="url"
        placeholder="Enter URL..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button type="submit">Shorten</button>
    </form>
  );
}

export default ShortenForm;