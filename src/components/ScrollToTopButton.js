import React, { useState } from "react";
import { Scroll } from "react-fns";

export function ScrollToTopButton() {
  const [isMounted, setIsMounted] = useState(false);

  return (
    <Scroll
      render={({ x, y }) => {
        // If scrolled past, then show, else don't show
        let isScrolledPast = y > 400;

        if (isScrolledPast) {
          if (!isMounted) setIsMounted(true);
        } else {
          if (isMounted) setIsMounted(false);
        }

        return (
          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className={`scroll-to-top-button button ${isMounted && "visible"}`}
            title="Go to top"
          >
            ⇪
          </button>
        );
      }}
    />
  );
}
