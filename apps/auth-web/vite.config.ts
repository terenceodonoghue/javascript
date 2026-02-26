import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [solidPlugin()],
  server: {
    open: '/?redirect_uri=http://localhost:5173',
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        headers: { 'X-Network-Context': 'local' },
      },
    },
  },
  build: {
    target: 'esnext',
  },
});
