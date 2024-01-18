import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from 'vite-plugin-html';
import path from "path";

const about = {
  title: process.env.VITE_APP_TITLE || "Sanjay S",
  description: process.env.VITE_APP_DESCRIPTION || "Sanjay S Profile",
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: about,
      },
    }),
  ],
  resolve: {
    alias: {
      "#assets": path.resolve(__dirname, "./src/assets"),
      "#components": path.resolve(__dirname, "./src/components"),
      "#pages": path.resolve(__dirname, "./src/pages"),
      "#theme": path.resolve(__dirname, "./src/theme"),
      "#config": path.resolve(__dirname, "./src/config"),
      "#hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
});
