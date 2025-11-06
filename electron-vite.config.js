import { defineConfig } from 'electron-vite';

export default defineConfig({
    main: {
        // entry: 'src/electron/main.js',
        entry: './src/electron/main.js',
      },
      renderer: {
        // entry: 'src/main.jsx',
        entry: './src/main.jsx',
      },
});