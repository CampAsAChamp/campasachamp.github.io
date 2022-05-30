import React from "react";

export function ScrollToTopButton() {
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
}
