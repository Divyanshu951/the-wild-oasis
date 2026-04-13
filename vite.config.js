import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      services: path.resolve(__dirname, "./src/services"),
      ui: path.resolve(__dirname, "./src/ui"),
      features: path.resolve(__dirname, "./src/features"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },
});
