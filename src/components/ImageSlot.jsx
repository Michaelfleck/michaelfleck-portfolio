import { useState } from "react";

/**
 * Image placeholder / display component.
 * Pass a `src` (e.g. an image you've dropped in /public) to show it:
 *   <ImageSlot src="/portrait.jpg" alt="Michael Fleck" />
 * With no src (or if the image fails to load) a styled placeholder shows.
 */
export const ImageSlot = ({ src, alt = "", placeholder = "Add an image" }) => {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <span className="image-slot">
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      </span>
    );
  }

  return (
    <span className="image-slot">
      <span className="image-slot-ph">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.6-3.6a2 2 0 0 0-2.8 0L6 21" />
        </svg>
        <span>{placeholder}</span>
      </span>
    </span>
  );
};
