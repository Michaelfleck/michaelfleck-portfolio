import { useState } from "react";

/**
 * Image placeholder / display component.
 * Pass a `src` (e.g. an image you've dropped in /public) to show it:
 *   <ImageSlot src="/portrait.jpg" alt="Michael Fleck" />
 * With no src (or if the image fails to load) a styled placeholder shows.
 */
export const ImageSlot = ({ src, alt = "" }) => {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <span className="image-slot">
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      </span>
    );
  }

  return null;
};
