/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const DARK = "dark";
const LIGHT = "light";
const COLOR_MODE_KEY = "color-mode";

export function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem(COLOR_MODE_KEY) === DARK);

  useEffect(() => {
    if (isDarkMode && document.documentElement.getAttribute(COLOR_MODE_KEY) !== DARK) setDarkMode();
    else setLightMode();
  }, []);

  const setDarkMode = () => {
    document.documentElement.setAttribute(COLOR_MODE_KEY, DARK);
    localStorage.setItem(COLOR_MODE_KEY, DARK);
    setIsDarkMode(true);
  };

  const setLightMode = () => {
    document.documentElement.setAttribute(COLOR_MODE_KEY, LIGHT);
    localStorage.setItem(COLOR_MODE_KEY, LIGHT);
    setIsDarkMode(false);
  };

  const switchTheme = () => {
    if (isDarkMode) {
      setLightMode();
    } else {
      setDarkMode();
    }
  };
  return <DarkModeToggle className="theme-switcher" onChange={switchTheme} checked={isDarkMode} size={80} />;
}
