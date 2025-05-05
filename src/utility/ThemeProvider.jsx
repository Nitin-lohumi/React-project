import React, { createContext, useState } from "react";
export const ThemeContext = createContext();
export const ThemeProviderCustom = ({ children }) => {
  const [mode, setMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
