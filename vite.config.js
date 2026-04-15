import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public',
  envDir: '../',
  server: {
    port: 5173,
    open: true
  }
});