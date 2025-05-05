import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProviderCustom } from "./utility/ThemeProvider.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProviderCustom>
      <App />
    </ThemeProviderCustom>
  </BrowserRouter>
);
