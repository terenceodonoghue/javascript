import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [solidPlugin()],
  server: {
    open: '/',
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
      },
    },
  },
  build: {
    target: 'esnext',
  },
});
