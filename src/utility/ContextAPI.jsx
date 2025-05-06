import React, { createContext, useEffect, useState } from "react";
export const ContextProvider = createContext();
export const ContextHook = ({ children }) => {
  const [currencyList, setCurrencyList] = useState([]);
  const [mode, setMode] = useState(() => {
    const storedMode = localStorage.getItem("app-theme-mode");
    return storedMode === "dark";
  });
  useEffect(() => {
    localStorage.setItem("app-theme-mode", mode ? "dark" : "light");
  }, [mode]);
  return (
    <ContextProvider.Provider
      value={{ mode, setMode, setCurrencyList, currencyList }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
