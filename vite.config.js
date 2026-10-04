import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ command }) => ({
  // Local development stays at /
  // GitHub Pages production build uses /anupamaportfolio/
  base: command === "build" ? "/anupamaportfolio/" : "/",

  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));