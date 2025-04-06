import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const pathSrc = new URL('./src', import.meta.url).pathname

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
})
