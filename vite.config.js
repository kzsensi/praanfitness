import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all network interfaces
    allowedHosts: true, // Allow all external hosts (like cloudflared tunnels)
    cors: true // Enable CORS
  }
})
