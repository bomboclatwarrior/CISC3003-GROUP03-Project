import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public',
  envDir: '../',
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/api': {
        target: 'https://my-money-budget.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    }
  }
});