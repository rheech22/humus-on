import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "./router-provider";

import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider />
  </StrictMode>
);
