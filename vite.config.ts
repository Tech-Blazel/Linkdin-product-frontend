import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: true,
    allowedHosts: [
      '2dbb-2401-4900-1c64-9687-64d3-f22b-8799-bc9a.ngrok-free.app',
      '.ngrok-free.app'
    ],
  },
})
