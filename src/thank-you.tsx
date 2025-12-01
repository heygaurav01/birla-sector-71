import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ThankYou from "./pages/ThankYou";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element for the Thank You page.");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <ThankYou />
    </BrowserRouter>
  </StrictMode>,
);

