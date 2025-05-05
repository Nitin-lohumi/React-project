import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import About from "./component/About";
import ExchangeRate from "./component/ExchangeRate";
import Home from "./component/Home";
import ErrorPage from "./component/ErrorPage";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ExchangeRate" element={<ExchangeRate />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
export default App;
