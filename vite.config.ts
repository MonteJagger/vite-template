import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import autoprefixer from 'autoprefixer'; // Import Autoprefixer
import postcssNested from 'postcss-nested'; // Import PostCSS Nested
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer,
        postcssNested
      ]
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias @ to src
    },
  }
})
