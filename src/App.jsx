import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import About from "./component/About";
import ExchangeRate from "./component/ExchangeRate";
import Home from "./component/Home";
import ErrorPage from "./component/ErrorPage";
import { createTheme, ThemeProvider } from "@mui/material";
import { ThemeContext } from "./utility/ThemeProvider";
function App() {
  const { mode } = useContext(ThemeContext);
  const LightTheme = createTheme({
    palette: {
      mode: "light",
      primary: { main: "#1976d2" },
      background: { default: "#ffffff" },
    },
  });

  const DarkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#1976d2" },
      background: { default: "#121212" },
    },
  });
  return (
    <ThemeProvider theme={mode ? DarkTheme : LightTheme}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ExchangeRate" element={<ExchangeRate />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
