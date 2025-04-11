import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./home.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { Background } from "./components/bg.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Background />
  </StrictMode>
);

AOS.init({ passive: true });
