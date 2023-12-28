import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': resolve(__dirname, './src/pages'),
      '@components': resolve(__dirname, './src/components'),
      // '@api': path.resolve(__dirname, './src/api'),
      // '@styles': path.resolve(__dirname, './src/styles'),
      // '@lib': path.resolve(__dirname, './src/lib'),
      // '@constants': path.resolve(__dirname, './src/constants'),
      '@assets': resolve(__dirname, './src/assets'),
    },
  },
});
