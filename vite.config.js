import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return

          if (id.includes('react-router-dom')) return 'router'
          if (id.includes('@mui') || id.includes('@emotion')) return 'mui'
          if (id.includes('lucide-react')) return 'icons'
          return 'vendor'
        },
      },
    },
  },
})
