import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensure correct paths for assets
  server: {
    host: true, // Allow network access (optional)
  }
});
