import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Grandmas-Kitchen/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
        // Add more HTML files here later if needed
      }
    }
  }
});
