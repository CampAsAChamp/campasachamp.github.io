import React from "react";
import { Scroll } from "react-fns";

export function MouseScrollIndicator() {
  let scrolledPast = false;
  return (
    <Scroll
      render={({ x, y }) => {
        if (!scrolledPast && y < 400) {
          return <div className="mouse" id="mouse-scroll-indicator" />;
        } else {
          scrolledPast = true;
          return "";
        }
      }}
    />
  );
}
