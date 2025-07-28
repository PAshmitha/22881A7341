import React from "react";

function UrlList({ urls, onClick }) {
  if (urls.length === 0) return <p>No URLs shortened yet.</p>;

  return (
    <div className="url-list">
      {urls.map((url) => (
        <div key={url.id} className="url-card">
          <p><strong>Original:</strong> {url.originalUrl}</p>
          <p>
            <strong>Short:</strong>{" "}
            <a
              href={url.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onClick(url.id)}
            >
              {url.shortUrl}
            </a>
          </p>
          <p><strong>Clicks:</strong> {url.clicks}</p>
        </div>
      ))}
    </div>
  );
}

export default UrlList;