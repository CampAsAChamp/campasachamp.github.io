import React from "react";
import { Scroll } from "react-fns";

export function MouseScrollIndicator() {
  let scrolledPast = false;
  return (
    <Scroll
      render={({ x, y }) => {
        let element;

        if (!scrolledPast && y < 800) {
          element = <div className="mouse" id="mouse-scroll-indicator" />;
        } else {
          scrolledPast = true;
        }

        return element;
      }}
    />
  );
}
