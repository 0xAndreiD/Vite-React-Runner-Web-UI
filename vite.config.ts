import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import macrosPlugin from "vite-plugin-babel-macros";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3003,
    host: true,
  },
  plugins: [macrosPlugin(), react()],
  resolve: {
    alias: [{ find: "~", replacement: path.resolve(__dirname, "src") }],
  },
});
