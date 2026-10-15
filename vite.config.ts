import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Inline tiny assets; keep fonts and images as cacheable files.
    assetsInlineLimit: 2048,
  },
});
