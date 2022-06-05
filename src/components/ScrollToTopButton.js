import React from "react";
import { Scroll } from "react-fns";

export function ScrollToTopButton() {
  return (
    <Scroll
      render={({ x, y }) => {
        return y > 400 ? (
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
        ) : (
          ""
        );
      }}
    />
  );
}
