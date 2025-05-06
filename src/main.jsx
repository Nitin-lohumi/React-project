import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ContextHook } from "./utility/ContextAPI.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextHook>
      <App />
    </ContextHook>
  </BrowserRouter>
);
