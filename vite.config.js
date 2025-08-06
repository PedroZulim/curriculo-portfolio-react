import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/curriculo-portfolio-react/#/',
  server: {
    historyApiFallback: true,
  },
})