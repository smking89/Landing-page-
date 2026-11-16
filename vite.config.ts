import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // Its own inspector port, so this dev server can run beside the app's.
  plugins: [react(), tailwindcss(), cloudflare({ inspectorPort: 9230 })],
  server: { port: 5173, strictPort: false },
})
