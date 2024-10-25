import { defineConfig } from "vite";
import styleX from "vite-plugin-stylex";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styleX({
      useCSSLayers: false,
    }),
  ],
});
