/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

import 'styles/NavBar/ThemeSwitcher.css';

const DARK = 'dark';
const LIGHT = 'light';
const COLOR_MODE_KEY = 'color-mode';

export function ThemeSwitcher() {
  let localStorageTheme = localStorage.getItem(COLOR_MODE_KEY);

  // Check for the OS theme if no localStorage theme
  if (!localStorageTheme) {
    const osDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    localStorageTheme = osDarkTheme ? DARK : LIGHT;
  }

  const [isDarkMode, setIsDarkMode] = useState(localStorageTheme === DARK);

  // Initialize theme
  useEffect(() => {
    if (isDarkMode) {
      setDarkMode();
    } else {
      setLightMode();
    }
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

  return <DarkModeToggle className="theme-switcher" onChange={switchTheme} checked={isDarkMode} size={'5em'} />;
}
