import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { mockupPreviewPlugin } from "./mockupPreviewPlugin";

const appRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: appRoot,
  plugins: [mockupPreviewPlugin(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(appRoot, "src"),
    },
  },
  build: {
    outDir: path.resolve(appRoot, "dist"),
    emptyOutDir: true,
  },
});
