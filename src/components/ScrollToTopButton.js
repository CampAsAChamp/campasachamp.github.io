import React, { useState } from "react";
import { Scroll } from "react-fns";

import { useMountTransition } from "hooks/useMountTransition";

export function ScrollToTopButton() {
  const [isMounted, setIsMounted] = useState(true);
  const hasTransitionedIn = useMountTransition(isMounted, 1000);

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
          (hasTransitionedIn || isMounted) && (
            <button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className={`scroll-to-top-button button ${hasTransitionedIn && "in"} ${isMounted && "visible"}`}
              title="Go to top"
            >
              ⇪
            </button>
          )
        );
      }}
    />
  );
}
