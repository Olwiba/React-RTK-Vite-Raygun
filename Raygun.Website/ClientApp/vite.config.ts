import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/app',
  server: {
    https: true,
    port: 6363,
    fs: {
      // Add the directory containing the file to the allow list
      allow: ['src', resolve('../Content/Images')],
    },
  },
  plugins: [react(), mkcert()],
})