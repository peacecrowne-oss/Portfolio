import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// Only the GitHub Pages workflow sets VITE_BASE_PATH; Docker/nginx and
// Vercel serve the app from the domain root and must keep base at "/".
export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "../shared"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_API_PROXY_TARGET || "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
