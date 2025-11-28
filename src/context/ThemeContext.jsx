import React from "react";
import { createContext, useState } from "react";
import useToggle from "../hooks/useToogle";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, toggleDark] = useToggle(false);

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;