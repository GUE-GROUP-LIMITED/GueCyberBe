import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 450,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@mui')) return 'mui';
            if (id.includes('react-router')) return 'react-router-vendor';
            if (id.includes('react-i18next') || id.includes('i18next')) return 'i18n-vendor';
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('lodash')) return 'lodash';
            return 'vendor';
          }
        }
      }
    }
  },
})

