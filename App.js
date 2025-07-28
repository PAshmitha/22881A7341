import React, { useState } from "react";
import ShortenForm from "./components/ShortenForm";
import UrlList from "./components/UrlList";
import useAnalytics from "./analytics/useAnalytics";

function App() {
  const [urls, setUrls] = useState([]);
  const { analytics, trackClick } = useAnalytics();

  const handleShorten = (originalUrl) => {
    const shortCode = Math.random().toString(36).substring(2, 8);
    const newUrl = {
      id: Date.now(),
      originalUrl,
      shortUrl: `https://sho.rt/${shortCode}`,
      clicks: 0,
    };
    setUrls([newUrl, ...urls]);
    analytics.add(newUrl);
  };

  const handleClick = (id) => {
    trackClick(id);
    setUrls(
      urls.map((url) =>
        url.id === id ? { ...url, clicks: url.clicks + 1 } : url
      )
    );
  };

  return (
    <div className="app-container">
      <h1>🔗 URL Shortener</h1>
      <ShortenForm onShorten={handleShorten} />
      <UrlList urls={urls} onClick={handleClick} />
    </div>
  );
}

export default App;