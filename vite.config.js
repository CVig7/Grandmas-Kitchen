import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Grandmas-Kitchen/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        // add more later like:
        // menu: resolve(__dirname, 'menu.html'),
        // locations: resolve(__dirname, 'locations.html')
      }
    }
  }
});
