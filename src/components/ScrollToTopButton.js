import React from "react";
import { Scroll } from "react-fns";

export function ScrollToTopButton() {
  return (
    <Scroll
      render={({ x, y }) => {
        // If scrolled past, then show, else don't show
        let isScrolledPast = y > 800;

        if (isScrolledPast) {
          return (
            <button
              id="scroll-to-top-button"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="button"
              title="Go to top"
            >
              ⇪
            </button>
          );
        } else {
          return "";
        }
      }}
    />
  );
}
