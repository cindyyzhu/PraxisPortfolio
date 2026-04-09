import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listens on all addresses, including LAN and public addresses
    port: 5173 // Optional: set a custom port
  }
})
