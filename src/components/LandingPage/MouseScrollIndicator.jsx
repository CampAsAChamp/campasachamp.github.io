import React, { useEffect, useState } from "react";

import useScrollPosition from "hooks/useScrollPosition";

import "styles/LandingPage/MouseScrollIndicator.css";

export function MouseScrollIndicator() {
  const scrollPosition = useScrollPosition();

  // TODO: Add to this so it doesn't re-render if we scroll back up
  const showMouse = scrollPosition.y < 400;

  return <div className={`${!showMouse && "show"}`} id="mouse-scroll-indicator" />;
}
