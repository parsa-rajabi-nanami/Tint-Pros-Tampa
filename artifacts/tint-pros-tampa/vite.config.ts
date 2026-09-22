import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const appRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: appRoot,
  base: process.env.VITE_BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(appRoot, 'src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  build: {
    outDir: path.resolve(appRoot, 'dist/public'),
    emptyOutDir: true,
  },
});
