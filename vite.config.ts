import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const __filename = import.meta.url;
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'app': path.resolve(__dirname, './src/app'),
      'entities': path.resolve(__dirname, './src/entities'),
      'features': path.resolve(__dirname, './src/features'),
      'pages': path.resolve(__dirname, './src/pages'),
      'shared': path.resolve(__dirname, './src/shared'),
      'widgets': path.resolve(__dirname, './src/widgets'),
    },
  },
  plugins: [react()]
})